import Link from 'next/link'

export default function Header() {
  return (
    <>
      <header className="header">
        <nav>
          <Link href="/"><a>Home</a></Link> &nbsp;|&nbsp;
          <Link href="/about"><a>About</a></Link> &nbsp;|&nbsp;
          <Link href="/blogs"><a>Blogs</a></Link> &nbsp;|&nbsp;
          <Link href="/podcasts"><a>Podcasts</a></Link> &nbsp;|&nbsp;
          <Link href="/contact"><a>Contact</a></Link>
        </nav>
      </header>
    </>
  )
}
