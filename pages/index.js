import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Navigation from '@components/Navigation';
import Playground from '@components/Playground';
import styles from '@styles/general.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          PlaceholderTech Play | Creative Playground For Modern Components
        </title>
      </Head>

      <div className="mx-auto">
        <Navigation />
      </div>

      <main>
        <div className="">
          <header className="flex flex-col justify-center items-center mb-52">
            <h1 className="font-bold sm:text-xl lg:text-9xl mt-52 mb-4 text-blue-300">
              PLAYGROUND
            </h1>
            <p className={`text-gray-500 font-bold text-lg ${styles.clipBg}`}>
              Components, Playground, Themes, and Layouts.
            </p>
            {/* <svg
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#273036"
                fill-opacity="1"
                d="M0,224L48,192C96,160,192,96,288,101.3C384,107,480,181,576,213.3C672,245,768,235,864,213.3C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg> */}
          </header>

          <section className="">
            <div class="editor m-6">
              <Playground className="m-6" />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
