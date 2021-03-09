import { Card, Container, Typography } from '@material-ui/core';
import React from 'react';
import ReactGridLayout from 'react-grid-layout';
import "react-grid-layout/css/styles.css";
import Chart from '../chart/Chart';


export default function Dashboard() {
    const cardStyle = { padding: 10, boxSizing: "border-box" }
    return (
        <Container style={{ position: "relative" }}>
            <Typography variant="h3" component="h1">DashBoard</Typography>
            <ReactGridLayout
                className="layout"
                cols={6}
                rowHeight={60}
                width={1200}
            >
                <Card key="A" data-grid={{ x: 0, y: 0, w: 6, h: 6, minH: 3, minW: 1 }} style={cardStyle}>
                    <Chart type="line" calledFromDashboard={true} />
                </Card>
                <Card key="B" data-grid={{ x: 0, y: 1, w: 2, h: 6, minH: 3, minW: 1 }} style={cardStyle}>
                    <Chart type="area" calledFromDashboard={true} />
                </Card>
                <Card key="C" data-grid={{ x: 2, y: 1, w: 2, h: 6, minH: 3, minW: 1 }} style={cardStyle}>
                    <Chart type="bar" calledFromDashboard={true} />
                </Card>
                <Card key="D" data-grid={{ x: 4, y: 1, w: 2, h: 6, minH: 3, minW: 1 }} style={cardStyle}>
                    <Chart type="radar" calledFromDashboard={true} />
                </Card>
                <Card key="E" data-grid={{ x: 2, y: 2, w: 2, h: 6, minH: 3, minW: 1 }} style={cardStyle}>
                    <Chart type="funnel" calledFromDashboard={true} />
                </Card>
            </ReactGridLayout>
        </Container>
    )
}