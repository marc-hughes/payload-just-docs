import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import { getAllDocPaths, getDocBySlug } from "../../lib/docs";
import Banner from "../../components/Banner";
import MDXTable from "../../components/MDXTable";
import YouTube from "../../components/YouTube";
import LightDarkImage from "../../components/LightDarkImage";

interface DocPageProps {
  frontMatter: {
    title: string;
    desc?: string;
  };
  content: MDXRemoteSerializeResult;
}

// MDX components configuration
const components = {
  Banner,
  YouTube,
  LightDarkImage,
  // Add table components
  table: MDXTable.table,
  th: MDXTable.th,
  td: MDXTable.td,
  tr: MDXTable.tr,
  thead: MDXTable.thead,
  tbody: MDXTable.tbody,
};

export default function DocPage({ frontMatter, content }: DocPageProps) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-4">{frontMatter.title}</h1>
      {frontMatter.desc && (
        <p className="text-xl text-gray-600 mb-8">{frontMatter.desc}</p>
      )}
      <div className="prose prose-lg max-w-none">
        <MDXRemote {...content} components={components} />
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllDocPaths();
  return {
    paths: paths.map((path) => ({
      params: {
        slug: path.split("/"),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = Array.isArray(params?.slug)
    ? params.slug.join("/")
    : params?.slug || "";

  const { frontMatter, content } = getDocBySlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      format: "mdx",
    },
  });

  return {
    props: {
      frontMatter,
      content: mdxSource,
    },
  };
};
