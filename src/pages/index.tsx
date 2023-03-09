import Head from 'next/head';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>E-Money - Dashboard</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <>Content - Dashboard</>
    </>
  );
}
