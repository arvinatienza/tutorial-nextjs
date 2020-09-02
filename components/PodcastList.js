import Link from 'next/link'


export default function PodcastList({ podcasts }) {

  if (podcasts === 'undefined') return null

  return (
    <div>
      {!podcasts && <div>No podcasts :(</div>}
      <ul>
        {podcasts && podcasts.map((podcast) => {
          return (
            <li className="p-5 mb-7" key={podcast.id}>
              <Link href={{ pathname: `/podcasts/${podcast.slug}` }}>
                <a>{podcast.title}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

