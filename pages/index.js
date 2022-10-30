import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Akthex Tests</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="I LOVE YOU KIA!" />
        <p className="description">
          <i>FRFR</i>
        </p>
      </main>

      <Footer />
    </div>
  )
}
