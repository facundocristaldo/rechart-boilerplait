import { Container, Typography } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router';
import Chart from '../components/chart/Chart';

export default function ChartScreen() {
    const { type } = useParams();
    return (type && (
        <Container>
            <Typography variant="h3" component="h1">Chart type: {type}</Typography>
            <Chart type={type} calledFromDashboard={false} />
        </Container>
    )
    )

}