import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { styled } from '@/styles/stitches.config'
import { Phone, Repeat, House, Plus } from 'phosphor-react'

const inter = Inter({ subsets: ['latin'] })

export const EntranceAmount = styled('div', {
  backgroundColor: '$green',
  width: '100%',
  fontWeight: 'bold',
  padding: '1rem',
  borderRadius: '6px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$2xl',
})

export const OutputAmount = styled('div', {
  backgroundColor: '$red',
  fontWeight: 'bold',
  padding: '1rem 2rem',
  borderRadius: '6px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$lg',
})

export const AmountContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
})

export const QuickAddContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  gap: '1rem',
  padding: '2rem 0',

  div: {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'center',
    gap: '1rem',

    span: {
      backgroundColor: '$blue300',
      color: '$dark900',
      padding: '.8rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '6px',
    },
  },
})

export const TransactionList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  gap: '1rem',
  padding: '2rem 0',

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1rem',
    width: '100%',
    backgroundColor: '$dark600',
    borderRadius: '6px',
    padding: '.5rem',

    label: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
    },

    span: {
      marginRight: '.5rem',
      fontWeight: '600',
      color: '$greenText',
    },
  },
})

export default function Home() {
  return (
    <>
      <Head>
        <title>E-Money</title>
        <link rel='icon' href='/logo.png' />
      </Head>
      <>
        <AmountContainer>
          <EntranceAmount>R$ 15884,22</EntranceAmount>
          <OutputAmount>- R$ 15884,22</OutputAmount>
        </AmountContainer>

        <QuickAddContainer>
          <p>Quick add</p>

          <div>
            <span>
              <Plus size={28} weight='fill' />
            </span>

            <span>
              <Phone size={28} weight='fill' />
            </span>

            <span>
              <Repeat size={28} weight='fill' />
            </span>

            <span>
              <House size={28} weight='fill' />
            </span>
          </div>
        </QuickAddContainer>

        <TransactionList>
          <p>Recents</p>

          <div>
            <label>
              <House size={28} weight='fill' />
              <p>Transaction title</p>
            </label>
            <span>R$ 225,50</span>
          </div>
          <div>
            <label>
              <House size={28} weight='fill' />
              <p>Transaction title</p>
            </label>
            <span>R$ 225,50</span>
          </div>
          <div>
            <label>
              <House size={28} weight='fill' />
              <p>Transaction title</p>
            </label>
            <span>R$ 225,50</span>
          </div>
        </TransactionList>
      </>
    </>
  )
}
