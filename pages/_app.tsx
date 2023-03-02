import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <div className="flex min-h-screen justify-center items-center bg-slate-400">
    <Component {...pageProps} />
  </ div>
}
