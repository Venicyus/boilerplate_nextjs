import { ReactElement } from 'react'
import type { AppProps } from 'next/app'
import { AppProvider } from '@app/stores/useStore'

import '../src/styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
