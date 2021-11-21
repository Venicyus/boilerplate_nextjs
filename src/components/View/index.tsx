import { FC, ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  title?: string
  children: ReactNode
}

const ViewComponent: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ?? 'Nextjs 12'}</title>
      </Head>

      <div id="layout" className="h-screen flex justify-center items-center flex-col">
        {children}
      </div>
    </>
  )
}

export default ViewComponent
