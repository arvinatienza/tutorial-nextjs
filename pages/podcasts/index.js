import Head from 'next/head'

import Layout from '../../components/Layout'
import PodcastList from '../../components/PodcastList'

const RSS_URL = process.env.ANCHORFM_RSS_URL
const PREFIX = process.env.ANCHORFM_URL_PREFIX

var Feed = require('rss-to-json');

export default function Index({ title, description, podcasts, ...props }) {
  return (
    <Layout pageTitle={title}>
      <h1 className="title">Welcome to blog!</h1>
      <p className="description">
        {description}
      </p>
      <main>
        <PodcastList podcasts={podcasts} />
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const configData = await import(`../../site-config.json`)

  let podcasts = [];

  await Feed.load(RSS_URL, function(err, rss){
    const items = rss.items;

    podcasts = items.map((i, index) => {
      let podcast = i
      podcast.slug = i.url.replace(PREFIX, "").toLowerCase();
      return podcast
    })

    podcasts = podcasts.reverse()
  })

  return {
    props: {
      podcasts,
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}

