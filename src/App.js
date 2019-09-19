import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Box, Grid, Grommet } from 'grommet';
import { Sidebar } from './components/sidebar';
import { graphsTheme } from './theme';
import { Analytics } from './pages/Analytics';

export const App = () => (
  <Router>
    <Grommet theme={graphsTheme} full>
      <Grid
        fill
        rows={['auto']}
        columns={['auto', 'flex']}
        areas={[
          { name: 'sidebar', start: [0, 0], end: [0, 0] },
          { name: 'main', start: [1, 0], end: [1, 0] },
        ]}
      >
        <Sidebar gridArea="sidebar" />
        <Box pad={{ horizontal: 'small' }} gridArea="main">
          <Switch>
            <Route path="/" exact component={Analytics} />
            {/* <Route path="/learn" component={Learn} />
          <Route path="/inference" component={Inference} /> */}
            {/* <Route component={NotFound} /> */}
          </Switch>
        </Box>
      </Grid>
    </Grommet>
  </Router>
);
