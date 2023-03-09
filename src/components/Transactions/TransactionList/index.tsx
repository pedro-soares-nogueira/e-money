import { dataformatter, priceFormatter } from '@/utils/formatter';
import React, { useState } from 'react';
import {
  TransactionsTable,
  PriceHighlight,
  TransactionsContainer,
} from './styles';

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

const transactions = [
  {
    id: 1,
    description: 'Mercado',
    type: 'outcome',
    price: 5520,
    category: 'food',
    createdAt: '2023-03-09T18:12:29.584Z',
  },
  {
    id: 2,
    description: 'Trampo',
    type: 'income',
    price: 267,
    category: 'freelancer',
    createdAt: '2023-03-09T18:12:29.584Z',
  },
  {
    id: 3,
    description: 'Trampo',
    type: 'income',
    price: 267,
    category: 'freelancer',
    createdAt: '2023-03-09T18:12:29.584Z',
  },
  {
    id: 4,
    description: 'Mercado',
    type: 'outcome',
    price: 5520,
    category: 'food',
    createdAt: '2023-03-09T18:12:29.584Z',
  },
  {
    id: 5,
    description: 'Mercado',
    type: 'outcome',
    price: 5520,
    category: 'food',
    createdAt: '2023-03-09T18:12:29.584Z',
  },
  {
    id: 6,
    description: 'Trampo',
    type: 'income',
    price: 267,
    category: 'freelancer',
    createdAt: '2023-03-09T18:12:29.584Z',
  },
  {
    id: 7,
    description: 'Trampo',
    type: 'income',
    price: 267,
    category: 'freelancer',
    createdAt: '2023-03-09T18:12:29.584Z',
  },
  {
    id: 8,
    description: 'Mercado',
    type: 'outcome',
    price: 5520,
    category: 'food',
    createdAt: '2023-03-09T18:12:29.584Z',
  },
];

const TransactionList = () => {
  return (
    <TransactionsContainer
      css={{
        /* width */
        '::-webkit-scrollbar': {
          width: '10px',
        },

        /* Track */
        '::-webkit-scrollbar-track': {
          background: '#f1f1f1',
        },

        /* Handle */
        '::-webkit-scrollbar-thumb': {
          background: '#888',
        },

        /* Handle on hover */
        '::-webkit-scrollbar-thumb:hover': {
          background: '#555',
        },
      }}
    >
      <h1>Last Transactions</h1>
      <TransactionsTable>
        <tbody>
          {transactions.map(transaction => {
            return (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighlight type={`${transaction.type}`}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dataformatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            );
          })}
        </tbody>
      </TransactionsTable>
    </TransactionsContainer>
  );
};

export default TransactionList;
