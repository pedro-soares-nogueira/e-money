import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react';
import React from 'react';
import { SummaryContainer, SummaryCard } from './styles';

const Summary = () => {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#04D100" />
        </header>
        <strong>R$22222,222</strong>

        {/*  <strong>{priceFormatter.format(summary.income)}</strong> */}
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#FF0000" />
        </header>
        <strong>R$22222,222</strong>

        {/* <strong>{priceFormatter.format(summary.outcome)}</strong> */}
      </SummaryCard>

      <SummaryCard color="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>R$22222,222</strong>

        {/*  <strong>{priceFormatter.format(summary.total)}</strong> */}
      </SummaryCard>
    </SummaryContainer>
  );
};

export default Summary;
