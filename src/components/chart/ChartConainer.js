import { Card } from '@material-ui/core';
import React from 'react';

export default function ChartContainer({ calledFromDashboard, children }, props) {
    if (!calledFromDashboard)
        return (
            <Card style={{ height: 500, margin: 20, padding: 20 }}>
                {children}
            </Card>
        )
    return (
        <>
            { children}
        </>
    )
}