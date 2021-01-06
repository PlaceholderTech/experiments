import CardBasic from '@components/CardBasic';
import Navigation from '@components/Navigation';
import Head from 'next/head';

export default function CardComponent() {
  return (
    <>
      <div className="mx-auto">
        <Head>
          <title>Card | PlaceholderTech</title>
        </Head>
        <Navigation />
      </div>
      <div className="">
        <CardBasic
          thumbnailUrl="https://picsum.photos/300/300"
          name="Manu Arora"
          tech="Tailwind, NextJS"
          avatarUrl="/assets/avatar/manu.jpg"
          link="/ui/card-simple"
          title="This is a card component build out of tailwindcss. Excellent for listing products and about sections."
          description="Tailwindcss is a utility based framework, unlike Bootstrap and Material where they use components for pretty much everything. Tailwindcss is a low level framework to build custom components and I think it's beautiful."
        />
      </div>
    </>
  );
}
