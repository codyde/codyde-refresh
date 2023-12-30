import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post.slug }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.slug === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  return { title: post.title }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.slug === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  return (
    <article className="mx-auto px-48 py-24 text-white bg-slate-900">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-lg text-gray-300">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <h1 className="text-7xl font-bold border-b-2 border-orange-500 pb-8">{post.title}</h1>
      </div>
      <div className="[&>*]:mb-3 [&>*:last-child]:mb-0 text-xl" dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </article>
  )
}

export default PostLayout