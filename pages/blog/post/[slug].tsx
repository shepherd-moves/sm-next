import React from "react";
import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../../components/RichTextComponents";
import urlFor from "../../../lib/urlFor";

type Props = {
  params: {
    slug: string;
  };
};

const singlePostquery = groq`
    *[_type == "post" && slug.current == $slug][0] {
        ...,
        author->,
        categories[]->,
    }
`;

const allPostsQuery = groq`
  *[_type == "post"] {
    ...,
    author->,
    categories[]-> 
  } | order(_createdAt desc)
`;

export async function getStaticPaths() {
  const res = await client.fetch(allPostsQuery);
  const paths = res.map((post: any) => ({
    params: { slug: post.slug.current },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const slug = context.params.slug;
  // console.log(slug);
  const res = await client.fetch(singlePostquery, { slug });
  return {
    props: {
      post: res,
    },
  };
}

function BlogPost({ post }: any) {
  return (
    <div className="mt-4 max-w-screen-md px-4 md:px-8 mx-auto">
      <div className="flex justify-between items-end mt-auto mb-2">
        <div className="flex items-center gap-2">
          <div className="w-14 h-14 shrink-0 bg-gray-100 rounded-full overflow-hidden">
            <img
              src={urlFor(post.author.image).url()!}
              loading="lazy"
              alt="Photo by Brock Wegner"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div>
            <span className="block text-black font-bold text-lg">
              {post.author.name}
            </span>
            <span className="block text-gray-600 text-sm">
              {new Date(post._createdAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}{" "}
            </span>
          </div>
        </div>
      </div>
      <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">
        {post.title}
      </h1>
      {post.body.map((block: any, index: number) => (
        <PortableText
          key={index}
          value={block}
          // @ts-ignore
          components={RichTextComponents}
        />
      ))}
    </div>
  );
}

export default BlogPost;
