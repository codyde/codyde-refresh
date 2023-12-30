import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import GithubSlugger from "github-slugger";
import { Pluggable } from "unified";

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    slug: { type: 'string', required: true },
    cover_image: { type: 'string', required: false },
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/${post.slug}` },
    headings: {
      type: "json",
      resolve: async (doc) => {
        const slugger = new GithubSlugger();
        const regex = /\n\n(?<flag>#{1,6})\s+(?<content>.+)/g;
 
        const headings = Array.from(doc.body.raw.matchAll(regex)).map(
          ({ groups }) => {
            const flag = groups?.flag;
            const content = groups?.content;
            return {
              heading: flag?.length,
              text: content,
              slug: content ? slugger.slug(content) : undefined,
            };
          }
        )
        return headings; 
      }
    }
  },
}))

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  markdown:
  {
    remarkPlugins: [[remarkGfm]],
    rehypePlugins: [[rehypeSlug, rehypeAutolinkHeadings],rehypeHighlight as Pluggable<any>],
  }
})