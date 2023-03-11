import Head from 'next/head';
import { Inter } from 'next/font/google';
import { styled } from '@/styles/stitches.config';
import Summary from '@/components/Sumary';
import TransactionList from '@/components/Transactions/TransactionList';
import { GetServerSideProps, GetStaticProps } from 'next';
import { prisma } from '@/lib/prisma';
import { ReactElement } from 'react';
import DefaultLayout from '@/components/DefaultLayout';

const inter = Inter({ subsets: ['latin'] });

interface Transaction {
  transactions: {
    id: string;
    title: string;
    amount: number;
    createdAt: string;
    type: string;
    category: {
      id: string;
      name: string;
      color: string;
    };
  }[];
}

export const getServerSideProps: GetServerSideProps = async context => {
  const transactionsArray = await prisma.transaction.findMany({
    include: { Category: true },
    orderBy: {
      createdAt: 'desc',
    },
  });

  const transactions = JSON.parse(JSON.stringify(transactionsArray));

  return {
    props: { transactions },
  };
};

export default function Home({ transactions }: Transaction) {
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
            <TransactionList transactions={transactions} />
          </TransactionsContent>
          {/* <ChartsContent>CHARTS</ChartsContent> */}
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

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
