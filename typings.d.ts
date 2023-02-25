import { type } from "os";

type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
    type: string;
}

interface Post extends Base {
    author: Author;
    body: Block[];
    categories: Category[];
    mainImage: Image;
    slug: Slug;
    title: string;
    description:string;
}

interface Author extends Base {
    name: string;
    image: Image;
    bio: Block[];
    slug: slug;
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

interface MainImage{
    _type: "image";
    asset: Reference;

}

interface Title{
    _type: "string";
    current: string;
}
