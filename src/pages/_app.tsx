import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import MainLayout from '../../components/layouts/MainLayout'

import { Inter } from 'next/font/google';
import '../styles/custom.scss';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] })

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <div className={inter.className}>
      <MainLayout>
        {getLayout(<Component {...pageProps} />)}
      </MainLayout>
    </div>
  )
}
