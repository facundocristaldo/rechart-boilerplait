import { AppBar, Button, Toolbar } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <AppBar style={{ position: "relative" }}>
            <Toolbar>
                <Link to="/"><Button>Dashboard</Button></Link>
                <Link to="/chart/line"><Button>Line Chart</Button></Link>
                <Link to="/chart/area"><Button>Area Chart</Button></Link>
                <Link to="/chart/bar"><Button>Bar Chart</Button></Link>
                <Link to="/chart/radar"><Button>Radar Chart</Button></Link>
                <Link to="/chart/funnel"><Button>Funnel Chart</Button></Link>
            </Toolbar>
        </AppBar>
    )
}