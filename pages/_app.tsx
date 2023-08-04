//import 'styles/globals.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'styles/base.scss'

import type { AppProps } from 'next/app'
import Header from 'components/Header/Header'

import { headerData } from 'data/headerData'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header {...headerData} />
      <Component {...pageProps} />
    </>
  )
}
