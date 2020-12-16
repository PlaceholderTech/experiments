import Head from 'next/head';
import Navigation from '@components/Navigation';
import { useState } from 'react';

import Link from 'next/link';

export default function FoodComponent() {
  let [toggle, setToggle] = useState(false);

  const toggleClass = () => {
    console.log('TOggle working');
    // toggle = true;
    console.log(toggle);
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <div className="text-gray-600 font-inter">
      <Head>
        <title>Food Page | PlaceholderTech</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto">
        <Navigation />
      </div>

      {/* content wrapper */}

      <div className="grid md:grid-cols-12">
        <div className="md:col-span-2 md:flex md:justify-end">
          <nav className="text-right">
            <div className="flex justify-between items-center">
              <h1 className="font-bold uppercase p-4 border-b border-gray-100 text-gray-400">
                <Link href="/landing/food-page">
                  <a className="hover:text-gray-700"> Food UI</a>
                </Link>
              </h1>
              <div
                onClick={toggleClass}
                className="px-4 cursor-pointer md:hidden"
                id="burger"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
            </div>
            <ul
              className={`text-sm mt-6 ${toggle ? 'hidden' : ''} md:block`}
              id="menu"
            >
              <li className="text-gray-700 font-bold py-1 border-r-4 border-primary">
                <Link href="/landing/food-page">
                  <a className="px-4 flex justify-end">
                    <span>Home</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 ml-2"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  </a>
                </Link>
              </li>
              <li className="py-1 border-r-4 border-white">
                <Link href="/landing/food-page">
                  <a className="px-4 flex justify-end">
                    <span>About</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 ml-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </Link>
              </li>
              <li className="py-1 border-r-4 border-white">
                <Link href="/landing/food-page">
                  <a className="px-4 flex justify-end">
                    <span>Contact</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 ml-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
          {/* end nav */}
        </div>

        <main className="px-16 py-6 bg-gray-100 md:col-span-10">
          <div className="flex justify-center md:justify-end">
            <Link href="/">
              <a className="text-primary btn border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500">
                Log in{' '}
              </a>
            </Link>
            <Link href="/">
              <a className="text-primary ml-2 btn border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500">
                Sign up
              </a>
            </Link>
          </div>

          <header>
            <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
            <h3 className="text-2xl font-semibold">For UI enthusiasts</h3>
          </header>

          <div>
            <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
              Latest Recipes
            </h4>

            <div className="mt-8 grid md:grid-cols-3 gap-10">
              {/* Cards go here */}
              <div className="card hover:shadow-lg">
                <img
                  src="https://picsum.photos/seed/a/1600/1600"
                  className="w-full h-32 sm:h-48 object-cover"
                  alt="Recipe"
                />
                <div className="m-4">
                  <span className="font-bold">Chilli Butter Chicken </span>
                  <span className="block text-gray-400 text-sm">
                    Recipe by Manu
                  </span>
                </div>
                <div className="badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 inline-block pr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>25 minutes</span>
                </div>
              </div>

              <div className="card hover:shadow-lg">
                <img
                  src="https://picsum.photos/seed/b/1600/1600"
                  className="w-full h-32 sm:h-48 object-cover"
                  alt="Recipe"
                />
                <div className="m-4">
                  <span className="font-bold">Paneer Tikke </span>
                  <span className="block text-gray-400 text-sm">
                    Recipe by Abhinav
                  </span>
                </div>
                <div className="badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 inline-block pr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>30 minutes</span>
                </div>
              </div>

              <div className="card hover:shadow-lg">
                <img
                  src="https://picsum.photos/seed/c/1600/1600"
                  className="w-full h-32 sm:h-48 object-cover"
                  alt="Recipe"
                />
                <div className="m-4">
                  <span className="font-bold">Momos </span>
                  <span className="block text-gray-400 text-sm">
                    Recipe by Tailwind
                  </span>
                </div>
                <div className="badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 inline-block pr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>5 minutes</span>
                </div>
              </div>
            </div>

            <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
              Most Popular Recipes
            </h4>
            <div className="mt-8 grid md:grid-cols-3 gap-10">
              {/* Cards go here */}
              <div className="card hover:shadow-lg">
                <img
                  src="https://picsum.photos/seed/d/1600/1600"
                  className="w-full h-32 sm:h-48 object-cover"
                  alt="Recipe"
                />
                <div className="m-4">
                  <span className="font-bold">Lappa Lassan </span>
                  <span className="block text-gray-400 text-sm">
                    Recipe by Manu
                  </span>
                </div>
                <div className="badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 inline-block pr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>20 minutes</span>
                </div>
              </div>
              <div className="card hover:shadow-lg">
                <img
                  src="https://picsum.photos/seed/e/1600/1600"
                  className="w-full h-32 sm:h-48 object-cover"
                  alt="Recipe"
                />
                <div className="m-4">
                  <span className="font-bold">Chilli Tinda </span>
                  <span className="block text-gray-400 text-sm">
                    Recipe by Tomar
                  </span>
                </div>
                <div className="badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 inline-block pr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>15 minutes</span>
                </div>
              </div>
              <div className="card hover:shadow-lg">
                <img
                  src="https://picsum.photos/seed/f/1600/1600"
                  className="w-full h-32 sm:h-48 object-cover"
                  alt="Recipe"
                />
                <div className="m-4">
                  <span className="font-bold">Lasagna Bharta </span>
                  <span className="block text-gray-400 text-sm">
                    Recipe by Saluja
                  </span>
                </div>
                <div className="badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 inline-block pr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>25 minutes</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="bg-secondary-100 text-secondary-200 btn hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300 mt-8">
                Load More
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
