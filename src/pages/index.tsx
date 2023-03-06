import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { styled } from '@/styles/stitches.config'

const inter = Inter({ subsets: ['latin'] })

const Headding = styled('h2', {
  fontSize: '$2xl'
})

export default function Home() {
  return (
    <>
      <Head>
        <title>E-Money</title>
        <link rel='icon' href='/logo.png' />
      </Head>
      <main>
        <Headding>Hello Word</Headding>
      </main>
    </>
  )
}
