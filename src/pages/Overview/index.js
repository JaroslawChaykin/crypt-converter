import React, { useEffect } from 'react';
import ChartOfCrypt from '../../components/ChartOfCrypt/ChartOfCrypt';
import styled from 'styled-components';
import { useFetching } from '../../hooks/useFetching';
import CryptoService from '../../sevices/cryptoService';

const OverviewStyled = styled.section`
  padding: 30px 60px 0 60px;
  margin-left: 250px;

  @media screen and (max-width: 768px) {
    margin-left: 80px;
  }
`

const Overview = () => {

    return (
      <OverviewStyled>
          <h1>Overview</h1>

          <ChartOfCrypt crypt={'bitcoin'} currency={'usd'}/>
      </OverviewStyled>
    );
};

export default Overview;