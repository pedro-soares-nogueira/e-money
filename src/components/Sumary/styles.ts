import { styled } from '@/styles/stitches.config';

export const SummaryContainer = styled('section', {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1rem',
});

export const SummaryCard = styled('section', {
  width: '100%',
  background: '$dark600',
  borderRadius: '6px',
  padding: '2rem',

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  strong: {
    display: ' block',
    marginTop: '1rem',
    fontSize: '2rem',
  },

  variants: {
    color: {
      green: {
        color: 'green',
      },
    },
  },
});
