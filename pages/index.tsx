/* eslint-disable @next/next/no-img-element */
import { ReactElement } from 'react'
import Head from 'next/head'

const HomePage = (): ReactElement => {
  return (
    <>
      <Head>
        <title>Nextjs</title>
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">
            <span>Boilerplate </span>
            <a className="text-blue-600" href="https://nextjs.org">
              Nextjs
            </a>
          </h1>

          <p className="mt-3 text-2xl">
            <a href="https://nextjs.org/docs/basic-features/typescript">
              <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">Typescript</code>{' '}
            </a>
            <a href="https://tailwindcss.com">
              <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">Tailwind CSS</code>{' '}
            </a>
            <a href="https://standardjs.com/">
              <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
                Style Guide Standard
              </code>{' '}
            </a>
          </p>

          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            <a
              href="https://nextjs.org/docs"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
              <p className="mt-4 text-xl">
                Find in-depth information about Next.js features and API.
              </p>
            </a>

            <a
              href="https://nextjs.org/learn"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Learn &rarr;</h3>
              <p className="mt-4 text-xl">
                Learn about Next.js in an interactive course with quizzes!
              </p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Examples &rarr;</h3>
              <p className="mt-4 text-xl">
                Discover and deploy boilerplate example Next.js projects.
              </p>
            </a>

            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
              <p className="mt-4 text-xl">
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        <footer className="flex items-center justify-center w-full h-24 border-t">
          <span>Venicyus Paz</span>
        </footer>
      </div>
    </>
  )
}

export default HomePage
