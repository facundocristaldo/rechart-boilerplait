import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './screens/Home'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Box } from '@material-ui/core';
import ChartScreen from './screens/ChartScreen';
import NotFound from './screens/NotFound';

export default function App() {
  return (
    <Box style={{ backgroundColor: "rgb(247 247 247)", minHeight: "100vh" }}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path={`/chart/:type`} component={ChartScreen} />
          <Route exact path="/notfound" component={NotFound} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Box>
  );
}
