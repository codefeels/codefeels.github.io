import { generateRSSFeed, getAllPosts } from '../lib/api'

export default function AllPosts({ posts }) {
  console.log(JSON.stringify(posts))
  return (
    <div>
      <h2 style={{ fontFace: 'monospace' }}>codefeels</h2>
      <ul>
        {posts.map(post => (
          <li key={post.data.title}>
            <a href={post.data.slug}>{post.data.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()
  generateRSSFeed(posts)

  return {
    props: {
      posts: posts.map(r => {
        const { data, ...rest } = r
        return {
          ...rest,
          data: { ...data, date: `${data.date.toLocaleString()}` },
        }
      }),
    },
  }
}
