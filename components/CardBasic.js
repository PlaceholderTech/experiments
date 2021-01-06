import React from 'react';
import Link from 'next/link';

export default function CardBasic({
  thumbnailUrl,
  avatarUrl,
  name,
  tech,
  title,
  description,
  link
}) {
  return (
    <div>
      <div className="bg-gray-200 h-screen">
        <div className="px-8">
          <Link href={link}>
            <a>
              <div className="mx-auto lg:w-3/5 lg:flex lg:flex-row lg:h-auto">
                <img
                  src={thumbnailUrl}
                  alt="image-text"
                  className="rounded-tr-md rounded-tl-md h-48 w-full lg:h-auto lg:w-2/5 lg:rounded-bl-md lg:rounded-tr-none"
                />
                <div className="bg-white p-8 rounded-bl-md rounded-br-md lg:rouned-bl-none lg:rounded-tr-md">
                  <h2 className="text-gray-700 font-semibold">{title}</h2>
                  <p className="text-sm text-gray-600 mt-4">{description}</p>
                  <div className="flex items-center mt-8">
                    <div className="flex items-center">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={avatarUrl}
                        alt="avatar"
                      />
                      <div className="ml-4">
                        <p className="text-gray-800 text-sm font-semibold">
                          {name}
                        </p>
                        <p className="text-gray-400 text-sm">{tech}</p>
                      </div>
                    </div>

                    <div className="w-8 h-8 ml-auto bg-gray-200 rounded-full flex items-center justify-center">
                      <svg
                        width="16"
                        viewBox="0 -22 512 511"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m512 233.820312-212.777344-233.320312v139.203125h-45.238281c-140.273437 0-253.984375 113.710937-253.984375 253.984375v73.769531l20.09375-22.019531c68.316406-74.851562 164.980469-117.5 266.324219-117.5h12.804687v139.203125zm0 0" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
