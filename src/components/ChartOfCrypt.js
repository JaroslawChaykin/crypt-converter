import React from 'react';
import { Area, AreaChart, Tooltip, XAxis, YAxis } from 'recharts';
import { useEffect, useState } from 'react';
import { useFetching } from '../hooks/useFetching';
import axios from 'axios';
import { getDate } from '../utils';

const ChartOfCrypt = ({crypt, currency = 'usd', days = '14'}) => {

    const [prices, setPrices] = useState([]);

    const [fetchPrices, isLoading, error] = useFetching(async () => {
        const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${crypt}/market_chart?vs_currency=${currency}&days=${days}&interval=daily`)
        setPrices(getStructureObject(data.prices));
    });

    const getStructureObject = data => data.reduce((acc, item) => {
        const {day, month} = getDate(item[0])
        acc.push({
            date: `${day}.${month < 10 ? `0${month}`: month}`,
            [currency]: item[1].toFixed(2)
        });
        return acc;
    }, []);;

    useEffect(() => {
        fetchPrices();
    }, []);

    if(isLoading) return <h1>Loading...</h1>
    if(error) return <h1>{error}</h1>

    return (
      <div>
          <h1>{crypt}</h1>
          <div>
              <AreaChart
                width={1000}
                height={250}
                data={prices}
              >
                  <defs>
                      <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                      </linearGradient>
                  </defs>
                  <XAxis dataKey="date"/>
                  <YAxis/>
                  <Area dataKey={currency} stroke="#82ca9d" fill="url(#colorPv)"/>
                  <Tooltip/>
              </AreaChart>
          </div>
      </div>
    );
};

export default ChartOfCrypt;