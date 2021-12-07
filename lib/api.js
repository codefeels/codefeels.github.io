import fs from 'fs'
import { Feed } from 'feed'
import path from 'path'
import matter from 'gray-matter'
console.log({ Feed })

const postsDirectory = path.join(process.cwd(), '_posts')

export function getPostBySlug(slug) {
  return matter(fs.readFileSync(path.join(postsDirectory, slug), 'utf8'))
}

export function getAllPosts() {
  return fs
    .readdirSync(postsDirectory)
    .map(slug => getPostBySlug(slug))
    .sort((a, b) => +a.date - +b.date)
}

//adapted from https://ashleemboyer.com/how-i-added-an-rss-feed-to-my-nextjs-site
export function generateRSSFeed(articles) {
  const baseUrl = 'https://codefeels.github.io'
  const author = {
    name: 'codefeels',
  }

  const feed = new Feed({
    title: 'codefeels',
    description: 'rants',
    id: baseUrl,
    link: baseUrl,
    language: 'en',
    feedLinks: {
      rss2: `${baseUrl}/rss.xml`,
    },
    author,
  })

  articles.forEach(post => {
    const { slug } = post
    const url = `${baseUrl}/${slug}`

    feed.addItem({
      title: slug,
      id: url,
      link: url,
      description: '',
      content: '',
      author: [author],
      date: new Date(),
    })
  })

  fs.writeFileSync('public/rss.xml', feed.rss2())
}
