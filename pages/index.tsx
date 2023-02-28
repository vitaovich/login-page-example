import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen justify-center items-center bg-slate-400">
        <div className="flex flex-col rounded-lg bg-white p-12 space-y-4">
          <h1 className="text-xl">Log In</h1>
          <div className="flex flex-row justify-between items-center space-x-4">
            <div className="border grow"></div>
            <span>OR</span>
            <div className="border grow"></div>
          </div>
          <input
                type="text"
                className='border bg-slate-100 rounded-full p-4'
                placeholder='Username'
            />
            <input
                type="text"
                className='border bg-slate-100 rounded-full p-4'
                placeholder='Password'
            />
            <button className='bg-green-400 rounded-full p-4 text-white font-bold'>Log In</button>
          </div>
      </div>
    </>
  )
}
