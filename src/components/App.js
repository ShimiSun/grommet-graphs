import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Box, Grommet } from 'grommet';
import { Sidebar } from './sidebar';
import { graphsTheme } from '../theme';
import { Analytics } from '../pages/Analytics';

export const App = () => (
  <Router>
    <Grommet theme={graphsTheme} full>
      <Box direction="row">
        <Sidebar />
        <Box>
          <Switch>
            <Route path="/" exact component={Analytics} />
            {/* <Route path="/learn" component={Learn} />
          <Route path="/inference" component={Inference} /> */}
            {/* <Route component={NotFound} /> */}
          </Switch>
        </Box>
      </Box>
    </Grommet>
  </Router>
);
