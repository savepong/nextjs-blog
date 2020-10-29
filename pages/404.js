import Layout from '../components/layout'
import Head from 'next/head'

export default function Custom404() {
  const title = '404 - Page Not Found'

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      
      <h1>{title}</h1>
    </Layout>
  )
}