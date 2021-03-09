import { Card, Container, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ReactGridLayout from 'react-grid-layout';
import "react-grid-layout/css/styles.css";
import Chart from '../chart/Chart';


export default function Dashboard() {
    const cardStyle = { padding: 10, boxSizing: "border-box", position: "relative" }
    const [cards, setCards] = useState([])
    useEffect(() => {
        setCards([
            {
                key: "A",
                dataGrid: { x: 0, y: 0, w: 6, h: 6, minH: 3, minW: 1 },
                chartType: "line",
                visible: true,
            }, {
                key: "B",
                dataGrid: { x: 0, y: 1, w: 2, h: 6, minH: 3, minW: 1 },
                chartType: "bar",
                visible: true,
            }, {
                key: "C",
                dataGrid: { x: 2, y: 1, w: 2, h: 6, minH: 3, minW: 1 },
                chartType: "area",
                visible: true,
            }, {
                key: "D",
                dataGrid: { x: 4, y: 1, w: 2, h: 6, minH: 3, minW: 1 },
                chartType: "radar",
                visible: true,
            }, {
                key: "E",
                dataGrid: { x: 2, y: 2, w: 2, h: 6, minH: 3, minW: 1 },
                chartType: "funnel",
                visible: true,
            },
        ])
    }, [])
    const closeCard = (cardKey) => {
        const newCards = [...cards]
        console.log("cardKey", cardKey)
        console.log("cards", cards)
        const cardIndex = cards.findIndex((card, index) => card.key === cardKey)
        newCards.splice(cardIndex, 1)
        setCards([...newCards])
    }
    return (
        <Container style={{ position: "relative" }}>
            <Typography variant="h3" component="h1">DashBoard</Typography>
            <ReactGridLayout
                className="layout"
                cols={6}
                rowHeight={60}
                width={1200}
            >
                {cards.map(card => (
                    <Card key={card.key} data-grid={card.dataGrid} style={cardStyle}>
                        <Chart type={card.chartType} calledFromDashboard={true} />
                        <span style={{ position: "absolute", top: 2, right: 2, zIndex: 2 }} onClick={() => closeCard(card.key)}>X</span>
                    </Card>
                ))}
            </ReactGridLayout>
        </Container>
    )
}