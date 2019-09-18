import React from 'react';

import { Box, Diagram, Stack } from 'grommet';

const Node = ({ id, background }) => (
  <Box
    id={id}
    margin="small"
    pad="22px"
    background={background || 'light-4'}
    round="small"
  />
);
const connections = [
  {
    fromTarget: '1',
    toTarget: '2',
    thickness: 'xsmall',
    color: 'accent-2',
  },
  {
    fromTarget: '1',
    toTarget: '4',
    thickness: 'xsmall',
    color: 'accent-1',
  },
  {
    fromTarget: '3',
    toTarget: '5',
    thickness: 'xsmall',
    color: 'accent-1',
    type: 'rectilinear',
  },
  {
    fromTarget: '4',
    toTarget: '7',
    thickness: 'xsmall',
    color: 'accent-1',
    type: 'rectilinear',
  },
  {
    fromTarget: '8',
    toTarget: '7',
    thickness: 'xsmall',
    color: 'accent-2',
  },
];

export const CampaignDiagram = () => {
  return (
    <Box align="center" pad={{ vertical: 'medium' }}>
      <Stack guidingChild={1}>
        <Diagram connections={connections} />
        <Box>
          <Box direction="row">
            <Node id="1" background="teal" />
            <Node id="2" background="accent-4" />
            <Node id="3" background="brand" />
          </Box>
          <Box direction="row">
            <Node id="4" />
            <Node id="5" background="brand" />
          </Box>
          <Box direction="row">
            <Node id="6" />
            <Node id="7" background="teal" />
            <Node id="8" background="accent-4" />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};
