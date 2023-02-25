import React from "react";
import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../../components/RichTextComponents";

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
  console.log(slug);
  const res = await client.fetch(singlePostquery, { slug });
  return {
    props: {
      post: res,
    },
  };
}

function BlogPost({ post }: any) {
  return (
    <div>
      <h1>{post.title}</h1>
      {post.body.map((block: any) => (
        <PortableText value={block} components={RichTextComponents} />
      ))}
    </div>
  );
}

export default BlogPost;
