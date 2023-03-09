import { styled } from '@/styles/stitches.config';

export const TransactionsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem ',

  background: '$dark600',
  padding: '1.25rem',
  borderRadius: '10px',
});

export const TransactionsTable = styled('table', {
  width: '100%',
  borderCollapse: 'separate',
  borderSpacing: '0 0.5rem',

  td: {
    padding: '1.25rem 2rem',
    background: '$dark400',

    '&:first-child': {
      borderTopLeftRadius: '6px',
      borderBottomLeftRadius: '6px',
    },

    '&:last-child': {
      borderTopRightRadius: '6px',
      borderBottomRightRadius: '6px',
    },
  },
});

export const PriceHighlight = styled('span', {
  color: '$greenLight',

  variants: {
    type: {
      outcome: {
        color: '$redLight',
      },
    },
  },
});

export const CategoryTag = styled('span', {
  padding: '0.5rem 1rem',
  backgroundColor: '$redLight',
  borderRadius: '4px',
  textTransform: 'uppercase',
  fontSize: '14px',
  fontWeight: '700',

  variants: {
    color: {
      blue: {
        backgroundColor: '$blue300',
      },
    },
  },
});
