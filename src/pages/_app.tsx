import DefaultLayout from '@/components/DefaultLayout';
import '@/styles/globals.ts';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { Session } from 'next-auth';

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout<P> = AppProps<P> & {
  Component: NextPageWithLayout<P>;
};

export default function App({
  Component,
  pageProps,
}: AppPropsWithLayout<{ session: Session }>) {
  const getLayout = Component.getLayout ?? (page => page);
  return <>{getLayout(<Component {...pageProps} />)}</>;
}
