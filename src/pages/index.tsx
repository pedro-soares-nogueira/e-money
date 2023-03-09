import Head from 'next/head';
import { Inter } from 'next/font/google';
import { styled } from '@/styles/stitches.config';
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react';
import Summary from '@/components/Sumary';
import TransactionList from '@/components/Transactions/TransactionList';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>E-Money - Dashboard</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <>
        <MainContent>
          <TransactionsContent>
            <Summary />
            <TransactionList />
          </TransactionsContent>
          <ChartsContent>CHARTS</ChartsContent>
        </MainContent>
      </>
    </>
  );
}

export const MainContent = styled('div', {
  display: 'flex',
  width: '100%',
  gap: '2rem ',
});

export const TransactionsContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '2rem ',
});

export const ChartsContent = styled('div', {
  backgroundColor: '$dark600',
  padding: '1.5rem',
  width: '350px',
  borderRadius: '6px',
  height: 'calc(100vh - 60px)',
});
