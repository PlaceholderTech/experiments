import Head from 'next/head';
import Navigation from '@components/Navigation';

export default function FoodComponent() {
  return (
    <div>
      <Head>
        <title>Food Page | PlaceholderTech</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx:auto">
        <Navigation />
      </div>

      <main>
        <p className="description">
          <code>Lets code our Landing page with tailwind</code>
        </p>
      </main>
    </div>
  );
}
