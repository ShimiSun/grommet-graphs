import React from 'react';
import { Box } from 'grommet';

export const Node = ({ id, background }) => (
  <Box
    id={id}
    margin="small"
    pad="22px"
    background={background || 'light-4'}
    round="small"
  />
);

export const InitialNodes = () => (
  <>
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
  </>
);
