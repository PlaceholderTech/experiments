import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Navigation from '@components/Navigation';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Experiments | PlaceholderTech</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx:auto">
        <Navigation />
      </div>

      <main>
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
    </div>
  );
}
