import React from 'react';

import { Box } from 'grommet';

import { Tile } from '../../Tile';
import { Legend } from '../legend/Legend';
import { extendedItems as items } from '../legend/data';

const Circle = ({ size, color, alignSelf, ...rest }) => (
  <Box width={size} height={size} round="full" background={color} {...rest} />
);

export const Coversations = () => (
  <Tile title="Coversations by Source" width={{ min: 'minConversations' }}>
    <Box direction="row" pad="xsmall" alignSelf="center" align="center">
      <Box gap="xsmall">
        <Circle size="xsmall" color="brand" />
        <Box direction="row" gap="xsmall">
          <Circle size="xxsmallToxsmall" color="accent-2" />
          <Circle size="xxsmall" color="accent-1" />
        </Box>
      </Box>
      <Box>
        <Circle size="xsmall" color="white" />
        <Circle size="xxsmallToxsmall" color="accent-3" />
        <Circle size="xxxsmall" color="neutral-3" />
        <Circle size="small" color="accent-4" />
      </Box>
    </Box>
    <Box flex />
    <Legend items={items} />
  </Tile>
);
