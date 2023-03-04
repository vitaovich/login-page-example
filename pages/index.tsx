import Head from 'next/head'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import Login from '@/components/login'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Login />
    </>
  )
}
