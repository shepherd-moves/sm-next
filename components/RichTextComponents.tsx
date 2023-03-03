import Image from "next/image";
import Link from "next/link";
import urlFor from "../lib/urlFor";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image
            className="object-cover w-full h-full"
            src={urlFor(value).url()!}
            alt="Blog post image"
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => {
      return (
        <ul className="list-disc list-inside text-gray-500 sm:text-lg mb-6 md:mb-8">
          {children}
        </ul>
      );
    },
  },
  block: {
    h1: ({ children }: any) => {
      return (
        <h1 className="text-gray-800  text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">
          {children}
        </h1>
      );
    },
    h2: ({ children }: any) => {
      return (
        <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">
          {children}
        </h2>
      );
    },
    h3: ({ children }: any) => {
      return <h3 className="text-xl font-bold">{children}</h3>;
    },
    h4: ({ children }: any) => {
      return <h4 className="text-xl font-bold">{children}</h4>;
    },
    h5: ({ children }: any) => {
      return <h5 className="text-xl font-bold">{children}</h5>;
    },
    h6: ({ children }: any) => {},
    blockquote: ({ children }: any) => {
      return (
        <blockquote className="border-l-4 border-gray-200 pl-4">
          {children}
        </blockquote>
      );
    },
    code: ({ children }: any) => {
      return <code className="bg-gray-200 p-2 rounded">{children}</code>;
    },
    normal: ({ children }: any) => {
      return <p className="sm:text-lg mb-6 md:mb-8">{children}</p>;
    },
  },
  marks: {
    link: ({ children, mark }: any) => {
      return (
        <Link href={mark.href}>
          <a className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">
            {children}
          </a>
        </Link>
      );
    },
  },
};
