import Head from 'next/head'
//import styles from '../styles/Home.module.css'
//import MainNavigation from '../components/main-navigation.js'
import matter from 'gray-matter'

import Layout from '../components/Layout'

export default function Index({ title, description, posts, ...props }) {
  return (
    <Layout pageTitle={title}>
      <h1 className="title">Home</h1>
      <p className="description">
        {description}
      </p>
      <main>
        content
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const configData = await import(`../site-config.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
