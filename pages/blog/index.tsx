import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import urlFor from "../../lib/urlFor";
import Image from "next/image";
import Link from "next/link";

type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
  type: string;
};

interface Post extends Base {
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
}

interface Author extends Base {
  name: string;
  image: Image;
  bio: Block[];
  slug: Slug;
}

interface Image {
  _type: "image";
  asset: Reference;
}

interface Reference {
  _ref: string;
  _type: "reference";
}

interface Slug {
  _type: "slug";
  current: string;
}

interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}

interface Category extends Base {
  title: string;
  description: string;
}

interface MainImage {
  _type: "image";
  asset: Reference;
}

interface Title {
  _type: "string";
  current: string;
}

type Props = {
  posts: Post[];
};

const query = groq`
  *[_type == "post"] {
    ...,
    author->,
    categories[]-> 
  } | order(_createdAt desc)
`;

export async function getStaticProps() {
  const posts = await client.fetch(query);

  return {
    props: {
      posts,
    },
  };
}

function Blog({ posts }: Props) {
  return (
    <div className="grid p-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
      {posts.map((post) => (
        <div className="flex flex-col bg-white border rounded-lg overflow-hidden shadow-xl">
          <a
            href={`/blog/post/${post.slug.current}`}
            className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative"
          >
            <Image
              src={urlFor(post.mainImage).url()!}
              width={640}
              height={480}
              alt="Photo by Minh Pham"
              className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
            />
          </a>

          <div className="flex flex-col flex-1 p-4 sm:p-6">
            <h2 className="text-gray-800 text-lg font-semibold mb-2">
              <a
                href="#"
                className="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
              >
                {post.title}
              </a>
            </h2>

            <p className="text-gray-500 mb-8 line-clamp-4">
              {post.body.map((block) => {
                if (block._type !== "block") {
                  return null;
                }

                return block.children.map((span) => {
                  if (span._type !== "span") {
                    return null;
                  }

                  return span.text;
                });
              })}
            </p>

            <div className="flex justify-between items-end mt-auto">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 shrink-0 bg-gray-100 rounded-full overflow-hidden">
                  <Image
                    src={urlFor(post.author.image).url()!}
                    alt="Photo by Brock Wegner"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div>
                  <span className="block text-indigo-500">
                    {post.author.name}
                  </span>
                  <span className="block text-gray-400 text-sm">
                    {new Date(post._createdAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}{" "}
                  </span>
                </div>
              </div>

              <span className="text-gray-500 text-sm border rounded px-2 py-1">
                {post.categories.map((category) => category.title)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blog;
