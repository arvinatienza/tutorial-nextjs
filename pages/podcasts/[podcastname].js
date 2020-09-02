import Link from 'next/link'

import Layout from '../../components/Layout'

const RSS_URL = process.env.ANCHORFM_RSS_URL;
const PREFIX = process.env.ANCHORFM_URL_PREFIX

export default function PodcastDetails({ siteTitle, podcast }) {
  return (
    <Layout pageTitle={`${siteTitle} | ${podcast.title}`}>
      <Link href="/podcasts">
        <a> Backto podcast list</a>
      </Link>
      <article>
        <h1>{podcast.title}</h1>
        <div>
          {podcast.description}
        </div>
      </article>
    </Layout>
  )

}

export async function getStaticProps({ ...ctx }) {
  const { podcastname } = ctx.params
  const config = await import(`../../site-config.json`)

  var Feed = require('rss-to-json');
  let podcast

  await Feed.load(RSS_URL, function(err, rss){
    podcast = rss.items.find(p => p.url.toLowerCase().indexOf(podcastname) != -1);
    podcast.description = podcast.description.split("---")[0];
  })

  return {
    props: {
      siteTitle: config.title,
      podcast,
    },
  }
}

export async function getStaticPaths() {
  let podcasts = [];
  let slugs = []

  var Feed = require('rss-to-json');

  await Feed.load(RSS_URL, function(err, rss){
    podcasts = rss.items;
    slugs = podcasts.map((podcast, index) => {

      let slug = podcast.url.replace(PREFIX, "").toLowerCase()
      return slug
    })
  })

  const paths = slugs.map((slug) => `/podcasts/${slug}`)

  return {
    paths,
    fallback: false,
  }
}



