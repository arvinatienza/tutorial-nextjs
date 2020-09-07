import Head from 'next/head'
//import styles from '../styles/Home.module.css'
//import MainNavigation from '../components/main-navigation.js'
import matter from 'gray-matter'

import Layout from '@components/Layout'
import BlogPostList from '@components/BlogPostList'

export default function Index({ title, description, posts, ...props }) {
  return (
    <Layout pageTitle={title}>
      <h1 className="title">Welcome to blog!</h1>
      <p className="description">
        {description}
      </p>
      <main>
        <BlogPostList posts={posts} />
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const configData = await import(`site-config.json`)

  const posts = ((context) => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      const value = values[index]
      const document = matter(value.default)
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      }
    })
    return data
  })(require.context('../../_blogposts', true, /\.md$/))

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}

