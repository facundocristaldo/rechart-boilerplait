import { Box, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area, BarChart, Bar, PolarGrid, RadarChart, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, FunnelChart, Funnel, LabelList } from 'recharts';
import lineData from '../../test/lineData.json'
import radarData from '../../test/radarData.json'
import funnelData from '../../test/funnelData.json'
import ChartContainer from './ChartConainer';
import { Redirect } from 'react-router';
const data = lineData;

export default function Chart(props) {
    const { type, calledFromDashboard } = props

    const [showAxisNames, setShowAxisNames] = useState(true)
    const [showGrid, setShowGrid] = useState(true)
    const [showTooltip, setShowTooltip] = useState(true)
    const [showPerson1, setShowPerson1] = useState(true)
    const [showPerson2, setShowPerson2] = useState(true)
    const [showLegend, setShowLegend] = useState(true)

    //chart
    let chart = null;
    switch (type) {
        case "line":
            chart = (
                <LineChart data={data}>
                    {(showAxisNames && <XAxis dataKey="name" />)}
                    {(showAxisNames && <YAxis />)}
                    {(showGrid && <CartesianGrid stroke="#ccc" />)}
                    {(showTooltip && <Tooltip />)}
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                </LineChart>
            )
            break;
        case "area":
            chart = (
                <AreaChart data={data}>
                    {(showAxisNames && <XAxis dataKey="name" />)}
                    {(showAxisNames && <YAxis />)}
                    {(showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />)}
                    {(showTooltip && <Tooltip />)}
                    <Area type="monotone" dataKey="uv" stroke="#291F1E" fillOpacity={.5} fill="#291F1E" />
                    <Area type="monotone" dataKey="pv" stroke="#477998" fillOpacity={.5} fill="#477998" />
                </AreaChart>
            )
            break;
        case "bar":
            chart = (
                <BarChart data={data}>
                    {(showAxisNames && <XAxis dataKey="name" />)}
                    {(showAxisNames && <YAxis />)}
                    {(showGrid && <CartesianGrid strokeDasharray="3 3" />)}
                    {(showTooltip && <Tooltip />)}
                    <Bar type="monotone" dataKey="uv" stroke="#291F1E" fillOpacity={.5} fill="#291F1E" />
                    <Bar type="monotone" dataKey="pv" stroke="#477998" fillOpacity={.5} fill="#477998" />
                </BarChart>
            )
            break;
        case "radar":
            chart = (
                <RadarChart data={radarData}>
                    {(showGrid && <PolarGrid />)}
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={90} domain={[0, radarData[0].maxValue]} />
                    {(showPerson1 && <Radar name="Person 1" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />)}
                    {(showPerson2 && <Radar name="Person 2" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />)}
                    {(showLegend && <Legend />)}
                </RadarChart>
            )
            break;
        case "funnel":
            chart = (
                <FunnelChart >
                    {(showTooltip && <Tooltip />)}
                    <Funnel
                        dataKey="value"
                        data={funnelData}
                        isAnimationActive>
                        {(showLegend && <LabelList position="right" fill="#000" stroke="none" dataKey="name" />)}
                    </Funnel>
                </FunnelChart>
            )
            break;
        default:
            break;
    }
    //Buttons
    let buttons = [];
    if (!calledFromDashboard) {
        if (type !== "radar" && type !== "funnel") buttons.push(<Button variant="text" onClick={() => setShowAxisNames(!showAxisNames)}>{(!showAxisNames) ? "Show" : "Hide"} Axis Names</Button>)
        if (type !== "funnel") buttons.push(<Button variant="text" onClick={() => setShowGrid(!showGrid)}>{(!showGrid) ? "Show" : "Hide"} Cartesian Grid</Button>)
        if (type !== "radar") buttons.push(<Button variant="text" onClick={() => setShowTooltip(!showTooltip)}>{(!showTooltip) ? "Show" : "Hide"} Tooltip</Button>)
        if (type === "radar") buttons.push(<Button variant="text" onClick={() => setShowPerson1(!showPerson1)}>{(!showPerson1) ? "Show" : "Hide"} Person 1</Button>)
        if (type === "radar") buttons.push(<Button variant="text" onClick={() => setShowPerson2(!showPerson2)}>{(!showPerson2) ? "Show" : "Hide"} Person 2</Button>)
        if (type === "radar" || type === "funnel") buttons.push(<Button variant="text" onClick={() => setShowLegend(!showLegend)}>{(!showLegend) ? "Show" : "Hide"} Legend</Button>)
    }
    return (
        <Box width="100%" height="100%">
            {(!calledFromDashboard && <Box>{buttons}</Box>)}
            <ChartContainer calledFromDashboard={calledFromDashboard}>
                <ResponsiveContainer>
                    {chart ? chart : <Redirect to="/notfound" />}
                </ResponsiveContainer>
            </ChartContainer>
        </Box>
    )
}