/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import styled from 'styled-components';

import { Box, Chart, calcs, Stack } from 'grommet';

const AnimatedStyledBarChart = styled(Chart)`
  path { 
    stroke-dasharray: 500; stroke-dashoffset: 500; animation: example 2s linear forwards; 
  },
`;

class ActivityChart extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {};

  componentDidMount() {
    const { values } = this.props;
    const { bounds } = calcs(values[0], { coarseness: 5, steps: [3, 3] });
    this.setState({ bounds });
  }

  render() {
    const { bounds } = this.state;
    const { values } = this.props;
    const barChart = {
      size: { width: 'large', height: 'medium' },
      bounds,
      type: 'bar',
    };
    const lineChart = {
      size: { width: 'large', height: 'medium' },
      bounds,
      thickness: 'xxsmall',
      round: true,
      type: 'line',
    };
    return (
      <Box overflow="auto">
        <Stack guidingChild="last">
          <AnimatedStyledBarChart {...barChart} values={values[0]} />
          <Chart {...lineChart} color="accent-2" values={values[1]} />
          <Chart {...lineChart} color="brand" values={values[2]} />
          <Chart {...lineChart} color="neutral-1" values={values[3]} />
        </Stack>
      </Box>
    );
  }
}

export { ActivityChart };
