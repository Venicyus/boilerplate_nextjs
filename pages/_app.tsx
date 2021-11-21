import type { AppProps } from 'next/app'
import { AppProvider } from '@app/stores/useStore'

import 'tailwindcss/tailwind.css'
import '../src/styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
