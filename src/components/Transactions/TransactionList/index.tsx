import { api } from '@/lib/axios';
import { prisma } from '@/lib/prisma';
import { ITransaction } from '@/types';
import { dataformatter, priceFormatter } from '@/utils/formatter';
import { GetServerSideProps } from 'next';
import { MagnifyingGlass } from 'phosphor-react';
import React, { useEffect, useState } from 'react';
import {
  TransactionsTable,
  PriceHighlight,
  TransactionsContainer,
  CategoryTag,
  SearchFormContainer,
  TrasactionsHeader,
} from './styles';

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

const TransactionList = ({ transactions }: Transaction) => {
  console.log(transactions);

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
            console.log(transaction['category']);

            return (
              <tr key={transaction.id}>
                <td width="50%">{transaction.title}</td>
                <td>
                  <PriceHighlight type={transaction.type}>
                    {priceFormatter.format(transaction.amount)}
                  </PriceHighlight>
                </td>
                <td>
                  {transaction.category ? (
                    <CategoryTag color={transaction.category.color}>
                      {transaction.category.name}
                    </CategoryTag>
                  ) : (
                    <CategoryTag>carregando</CategoryTag>
                  )}
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
