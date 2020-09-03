import Layout from '@components/Layout'
import ContactForm from '@components/ContactForm'

export default function About({ title, description, ...props }) {
  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description}>
        <h1 className="title">Contact Me</h1>

        <p className="description">
          {description}
        </p>

        <ContactForm />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const configData = await import(`../site-config.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    }
  }

}
