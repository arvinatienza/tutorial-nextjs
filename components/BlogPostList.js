import Link from 'next/link'

export default function BlogPostList({ posts }) {

  if (posts === 'undefined') return null

  return (
    <div>
      {!posts && <div>No posts :(</div>}
      <ul>
        {posts && posts.map((post) => {
          return (
            <li className="p-5 mb-7" key={post.slug}>
              <Link href={{ pathname: `/blogs/${post.slug}` }}>
                <a>{post.frontmatter.title}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
