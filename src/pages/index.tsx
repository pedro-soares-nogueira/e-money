import Head from 'next/head';
import { Inter } from 'next/font/google';
import { styled } from '@/styles/stitches.config';
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react';
import Summary from '@/components/Sumary';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>E-Money - Dashboard</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <>
        <Summary />
      </>
    </>
  );
}
