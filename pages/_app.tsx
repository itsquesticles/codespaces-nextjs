import type { AppProps } from 'next/app'
import SiteHeader from '../components/SiteHeader'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SiteHeader />
      <Component {...pageProps} />
    </>
  )
}
