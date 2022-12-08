import Head from 'next/head'
import Carousel from '../components/Carousel'
import Categories from '../components/Categories'

export default function Home() {
  return (
    <>
      <Head>
        <title>Clomerce - Home</title>
        <meta property="og:url" content='https://clomerce.vercel.app' />
        <meta property="og:title" content="Clomerce - Home" />
        <meta property="og:image" content="TODO" />
        <meta property="twitter:url" content='https://clomerce.vercel.app' />
        <meta property="twitter:title" content="Clomerce - Home" />
        <meta property="twitter:image" content="TODO" />
      </Head>
      <main>
        <Carousel />
        <Categories />
      </main>
    </>
  )
}
