import { GetStaticProps } from "next";
import Link from "next/link";
import { getAllDocs } from "../lib/docs";

interface Doc {
  slug: string;
  frontMatter: {
    title: string;
    desc?: string;
    order?: number;
  };
}

interface HomeProps {
  docs: Doc[];
}

export default function Home({ docs }: HomeProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Documentation</h1>
      <div className="grid gap-4">
        {docs.map((doc) => (
          <div
            key={doc.slug}
            className="p-4 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <Link
              href={`/docs/${doc.slug}`}
              className="text-xl font-semibold hover:text-blue-600"
            >
              {doc.frontMatter.title}
            </Link>
            {doc.frontMatter.desc && (
              <p className="mt-2 text-gray-600">{doc.frontMatter.desc}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const docs = getAllDocs();

  return {
    props: {
      docs,
    },
  };
};
