import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'

function PostCard(post: Post) {
  return (
    <div className="mb-8 w-2/3">
      <p className="mb-1 text-2xl font-semibold">
        <Link href={post.url} className="text-orange-700 hover:text-orange-900 dark:text-orange-500">
          {post.title}
        </Link>
      </p>
      <p className='text-lg'>{post.description}</p>
      <time dateTime={post.date} className="mb-2 block text-md text-gray-500">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      {/* <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} /> */}
    </div>
  )
}

export default function Home() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="min-h-screen items-center justify-center px-24 mt-36 bg-slate-900">
      <h1 className="mb-8 text-center text-4xl font-bold">Personal Blog Content</h1>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}