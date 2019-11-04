/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';

import { Box, Chart, calcs, Stack } from 'grommet';

const AnimatedStyledBarChart = styled(Chart)`
  path { 
    stroke-dasharray: 500; stroke-dashoffset: 500; animation: example 2s linear forwards; 
  },
`;

const chartSize = {
  width: 'large',
  height: 'medium',
};

const ActivityChart = ({ values }) => {
  const { bounds } = calcs(values[0], { coarseness: 5, steps: [3, 3] });
  const barChart = {
    size: chartSize,
    bounds,
    type: 'bar',
  };

  const lineChart = {
    size: chartSize,
    bounds,
    thickness: 'xsmall',
    round: true,
    type: 'line',
  };

  return (
    <Box alignSelf="center">
      <Stack guidingChild="last">
        <AnimatedStyledBarChart {...barChart} values={values[0]} />
        <Chart {...lineChart} color="accent-2" values={values[1]} />
        <Chart {...lineChart} color="brand" values={values[2]} />
        <Chart {...lineChart} color="neutral-1" values={values[3]} />
      </Stack>
    </Box>
  );
};

export { ActivityChart };
