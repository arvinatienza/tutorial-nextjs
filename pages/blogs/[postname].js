import Link from 'next/link'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

import Layout from '@components/Layout'

export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
  if (!frontmatter) return <></>

  return (
    <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`}>
      <Link href="/">
        <a> Backto post list</a>
      </Link>
      <article>
        <h1>{frontmatter.title}</h1>
        <p>By {frontmatter.author}</p>
        <div>
          <ReactMarkdown source={markdownBody}></ReactMarkdown>
        </div>
      </article>
    </Layout>
  )

}

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params
  const content = await import(`../../_blogposts/${postname}.md`)
  const config = await import(`../../site-config.json`)
  const data = matter(content.default)

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys()
    const data = keys.map((key, index) => {
      console.log(key)
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      return slug
      //return "test"
    })
    return data

  })(require.context('../../_blogposts', true, /\.md$/))

  const paths = blogSlugs.map((slug) => `/blogs/${slug}`)

  return {
    paths,
    fallback: false,
  }
}

