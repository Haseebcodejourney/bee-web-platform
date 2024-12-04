import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { dataset } from '../api/temprature';
import { Container, H2, P } from '../style/temprature/style';

export default function Temperature() {
    return (
        <>
            <Container>
                <H2>Temperature</H2>
                <P>The honey bee temperature graph typically tracks the temperature variations within a beehive, helping beekeepers monitor the optimal conditions for hive health.</P>
                <LineChart
                    dataset={dataset}
                    xAxis={[{ dataKey: 'x' }]}
                    series={[{ dataKey: 'y' }]}
                    height={300}
                    margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
                    grid={{ vertical: true, horizontal: true }}
                />
            </Container>
        </>
    )
}
