import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return <div className="flex min-h-screen justify-center items-center bg-slate-400">
    <Script src="https://accounts.google.com/gsi/client" />
    <Component {...pageProps} />
  </ div>
}
