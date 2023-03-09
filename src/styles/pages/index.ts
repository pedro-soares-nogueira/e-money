import { styled } from '@/styles/stitches.config'

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