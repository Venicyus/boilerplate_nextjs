import { ReactElement } from 'react'
import Head from 'next/head'
import LayoutComponent from '@app/components/Layout'

const HomePage = (): ReactElement => {
  return (
    <>
      <Head>
        <title>Hello Nextjs</title>
      </Head>

      <LayoutComponent />
    </>
  )
}

export default HomePage
