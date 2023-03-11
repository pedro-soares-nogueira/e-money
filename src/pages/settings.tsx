import DefaultLayout from '@/components/DefaultLayout';
import Head from 'next/head';
import React, { ReactElement } from 'react';

const settings = () => {
  return (
    <>
      <Head>
        <title>E-Money - Settings</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <>Content - Settings</>
    </>
  );
};

settings.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default settings;
