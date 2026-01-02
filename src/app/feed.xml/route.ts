import { getPosts } from "@/lib/blog"

const SITE_URL = "https://www.joaquimsnjr.tech"

export async function GET() {
  const posts = getPosts().sort(
    (a, b) =>
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  )

  const feedItems = posts
    .map((post) => {
      const pubDate = new Date(post.metadata.date).toUTCString()
      const link = `${SITE_URL}/blog/${post.slug}`

      return `
    <item>
      <title><![CDATA[${post.metadata.title}]]></title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description><![CDATA[${post.metadata.description || ""}]]></description>
      <pubDate>${pubDate}</pubDate>
      <author>joaquimsnjunior@gmail.com (Joaquim Silva)</author>
      ${post.metadata.coverImage ? `<enclosure url="${post.metadata.coverImage}" type="image/jpeg" />` : ""}
    </item>`
    })
    .join("")

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Joaquim Silva | Blog</title>
    <link>${SITE_URL}</link>
    <description>Artigos sobre engenharia de software, Cloud Native, Go e sistemas distribuídos.</description>
    <language>pt-BR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>https://res.cloudinary.com/dy5xyare1/image/upload/v1764384343/ProfileBW_jddt02.png</url>
      <title>Joaquim Silva | Blog</title>
      <link>${SITE_URL}</link>
    </image>
    <copyright>© ${new Date().getFullYear()} Joaquim Silva. Todos os direitos reservados.</copyright>
    <managingEditor>joaquimsnjunior@gmail.com (Joaquim Silva)</managingEditor>
    <webMaster>joaquimsnjunior@gmail.com (Joaquim Silva)</webMaster>
    <category>Technology</category>
    <category>Software Engineering</category>
    <category>Cloud Native</category>
    <category>Go</category>
    <ttl>60</ttl>
    ${feedItems}
  </channel>
</rss>`

  return new Response(feed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
