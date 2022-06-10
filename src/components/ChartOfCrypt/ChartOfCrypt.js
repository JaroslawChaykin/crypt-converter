import React from 'react';
import { Area, AreaChart, Tooltip, XAxis, YAxis } from 'recharts';

const ChartOfCrypt = ({history, currency}) => {

    return (
      <div>
          <div>
              <AreaChart
                width={1000}
                height={250}
                data={history}
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