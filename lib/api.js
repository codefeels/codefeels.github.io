import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields = []) {
  return getPostSlugs()
    .map(slug => getPostBySlug(slug, fields))
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
    const {
      content,
      fileName,
      meta: { date, description, title },
    } = post
    const url = `${baseUrl}/${fileName}`

    feed.addItem({
      title,
      id: url,
      link: url,
      description,
      content,
      author: [author],
      date: new Date(date),
    })
  })

  fs.writeFileSync('public/rss.xml', feed.rss2())
}
