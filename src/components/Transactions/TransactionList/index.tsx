import { dataformatter, priceFormatter } from '@/utils/formatter';
import { MagnifyingGlass } from 'phosphor-react';
import React, { useState } from 'react';
import {
  TransactionsTable,
  PriceHighlight,
  TransactionsContainer,
  CategoryTag,
  SearchFormContainer,
  TrasactionsHeader,
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
    category: {
      name: 'food',
      color: 'red',
    },
    createdAt: '2023-03-09T18:12:29.584Z',
  },
  {
    id: 2,
    description: 'Trampo',
    type: 'income',
    price: 267,
    category: {
      name: 'freelancer',
      color: 'pink',
    },
    createdAt: '2023-03-09T18:12:29.584Z',
  },
  {
    id: 3,
    description: 'Academia',
    type: 'outcome',
    price: 150,
    category: {
      name: 'Gym',
      color: 'blue',
    },
    createdAt: '2023-03-09T18:12:29.584Z',
  },
];

const TransactionList = () => {
  return (
    <TransactionsContainer>
      <TrasactionsHeader>
        <h1>Últimas transações</h1>
        <SearchFormContainer>
          <input type="text" placeholder="Buscque por transações" />
          <button>
            <MagnifyingGlass size={20} />
          </button>
        </SearchFormContainer>
      </TrasactionsHeader>
      <TransactionsTable>
        <tbody>
          {transactions.map(transaction => {
            return (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighlight type={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighlight>
                </td>
                <td>
                  <CategoryTag color={transaction.category.color}>
                    {transaction.category.name}
                  </CategoryTag>
                </td>
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
