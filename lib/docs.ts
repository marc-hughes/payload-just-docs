import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const docsDirectory = path.join(process.cwd(), 'docs')

export function getAllDocPaths() {
    const paths: string[] = []

    function traverseDir(dir: string) {
        const files = fs.readdirSync(dir)

        for (const file of files) {
            const fullPath = path.join(dir, file)
            const stat = fs.statSync(fullPath)

            if (stat.isDirectory()) {
                traverseDir(fullPath)
            } else if (path.extname(file) === '.mdx') {
                const relativePath = path.relative(docsDirectory, fullPath)
                paths.push(relativePath.replace(/\.mdx$/, ''))
            }
        }
    }

    traverseDir(docsDirectory)
    return paths
}

export function getDocBySlug(slug: string) {
    const realSlug = slug.replace(/\.mdx$/, '')
    const fullPath = path.join(docsDirectory, `${realSlug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
        slug: realSlug,
        frontMatter: data,
        content
    }
}

export function getAllDocs() {
    const paths = getAllDocPaths()
    const docs = paths.map(path => getDocBySlug(path))

    // Sort by order if present in frontmatter
    return docs.sort((a, b) => {
        if (a.frontMatter.order && b.frontMatter.order) {
            return a.frontMatter.order - b.frontMatter.order
        }
        return 0
    })
} 