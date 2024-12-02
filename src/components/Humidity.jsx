import React from 'react';
import '../style/temprature/style.css';
import { LineChart } from '@mui/x-charts/LineChart';
import { dataset } from '../api/temprature';

export default function Humidity() {
    return (
        <>
            <section className='humidity-wrapper'>
                <h2>Humidity</h2>
                <p>The honey bee temperature graph typically tracks the temperature variations within a beehive, helping beekeepers monitor the optimal conditions for hive health.</p>
                <LineChart
                    dataset={dataset}
                    xAxis={[{ dataKey: 'x' }]}
                    series={[{ dataKey: 'y' }]}
                    height={300}
                    margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
                    grid={{ vertical: true, horizontal: true }}
                />
            </section>
        </>
    )
}
