//import 'styles/globals.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'styles/base.scss'
import { CardStateProvider } from 'hooks/context'

import type { AppProps } from 'next/app'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'

import { headerData } from 'data/headerData'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CardStateProvider>
      <Header {...headerData} />
      <Component {...pageProps} />
      <Footer />
    </CardStateProvider>
  )
}
