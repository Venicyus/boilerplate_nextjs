import { ReactElement, ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  title?: string
  children: ReactNode
}

const LayoutComponent = ({ title, children }: Props): ReactElement => {
  return (
    <>
      <Head>
        <title>{title ?? 'Nextjs 12'}</title>
      </Head>

      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {children}
      </div>
    </>
  )
}

export default LayoutComponent
