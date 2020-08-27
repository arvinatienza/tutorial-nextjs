import Link from 'next/link'

export default function PostList({ posts }) {

  if (posts === 'undefined') return null

  return (
    <div>
      {!posts && <div>No posts :(</div>}
      <ul>
        {posts && posts.map((post) => {
          return (
            <li className="p-5 mb-7 bg-color-red" key={post.slug}>
              <Link href={{ pathname: `/post/${post.slug}` }}>
                <a>{post.frontmatter.title}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

//export async function getStaticProps() {
  //const configData = await import(`../site-config.json`)

  //const posts = ((context) => {
    //const keys = context.keys()
    //const values = keys.map(context)

    //const data = keys.map((key, index) => {
      //let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      //const value = values[index]
      //const document = matter(value.default)
      //return {
        //frontmatter: document.data,
        //markdownBody: document.content,
        //slug,
      //}
    //})
    //return data
  //})(require.context('../_posts', true, /\.md$/))


  //return {
    //props: {
      //posts: [
        //{
          //frontmatter: 'test',
          //markdownBody: 'test',
          //slug: 'test'
        //}
      //],
      //title: configData.default.title,
      //description: configData.default.description,
    //},
  //}
//}
