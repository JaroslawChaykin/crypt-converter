import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ChartOfCrypt from '../../components/ChartOfCrypt/ChartOfCrypt';
import { useFetching } from '../../hooks/useFetching';
import CryptoService from '../../sevices/cryptoService';
import MediaStream from '../../components/MediaStream/MediaStream';
import { getDate } from '../../utils';
import Select from '../../UI/select';

const MediaSection = styled.div`
  display: flex;
  gap: 25px;
  justify-content: ${props => props.children.length <= 2 ? 'flex-start' : 'space-between'};
  margin: 50px 0;
`
const Header = styled.div`
  display: flex;
  align-items: center;
  column-gap: 25px;
  > div {
    margin-top: 10px;
  }
`

const Overview = () => {
    const [cryptoSelected, setCryptoSelected] = useState('bitcoin');
    const [currencySelected, setCurrencySelected] = useState('usd');
    const [crypto, setCrypto] = useState([]);
    const [cryptoHistory, setCryptoHistory] = useState([]);

    const [fetchCrypto, isLoading, error] = useFetching(async () => {
        const data = await CryptoService.getCryptocurrency(cryptoSelected)
        const dataHistory = await CryptoService.getCryptocurrencyHistory(cryptoSelected, currencySelected, 14)
        setCryptoHistory(objectFromResponse(dataHistory.data.prices, currencySelected));
        setCrypto(data.data);
    });

    const objectFromResponse = (data, currency) => data.reduce((acc, item) => {
        const {day, month} = getDate(item[0])
        acc.push({
            date: `${day}.${month < 10 ? `0${month}`: month}`,
            [currency]: item[1].toFixed(2)
        });
        return acc;
    }, []);


    useEffect(() => {
        fetchCrypto()
    }, [cryptoSelected, currencySelected]);

    const changeCrypto = (e) => {
        setCryptoSelected(e.target.value)
    }

    const changeCurrency = (e) => {
        setCurrencySelected(e.target.value)
    }


    if(isLoading) return <h1>Loading...</h1>
    if(error) return <h1>error {error}</h1>

    return (
      <div>
          <Header>
              <h1>Overview</h1>
              <Select name={'crypto'}
                      value={cryptoSelected}
                      FCchanges={changeCrypto}
                      options={['bitcoin', 'ethereum', 'dogecoin', 'litecoin']}/>
              <Select name={'currency'}
                      value={currencySelected}
                      FCchanges={changeCurrency}
                      options={['usd', 'rub', 'eur']}/>
          </Header>
          <MediaSection>
              <MediaStream cryptoName={crypto.name} crypto={crypto.community_data} twitter />
              <MediaStream cryptoName={crypto.name} crypto={crypto.community_data} linkToPage={crypto.links?.subreddit_url} />
          </MediaSection>
          <ChartOfCrypt history={cryptoHistory} currency={currencySelected}/>
      </div>
    );
};

export default Overview;