import { generateRSSFeed, getAllPosts } from '../lib/api'

export default function AllPosts({ posts }) {
  console.log({ posts })
  return (
    <ul>
      {posts.map(post => (
        <li key={post.title}>{post.title}</li>
      ))}
    </ul>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])
  articles.sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1))

  generateRSSFeed(articles)

  return {
    props: { posts },
  }
}
