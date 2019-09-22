import React from 'react';

import { Box } from 'grommet';

import { Tile } from '../../Tile';
import { Legend } from '../legend/Legend';
import { extendedItems as items } from '../legend/data';

const Circle = ({ size, color, alignSelf, ...rest }) => (
  <Box
    width={size}
    height={size}
    round="full"
    background={color}
    animation={{ size: 'xlarge', type: 'zoomIn' }}
    {...rest}
  />
);

export const Coversations = ({ ...rest }) => (
  <Tile title="Coversations by Source" {...rest}>
    <Box
      direction="row"
      pad={{ horizontal: 'small', vertical: 'medium' }}
      alignSelf="center"
      align="center"
    >
      <Box gap="xsmall">
        <Circle size="xsmall" color="brand" />
        <Box direction="row" gap="xsmall">
          <Circle size="xxsmallToxsmall" color="accent-2" />
          <Circle size="xxsmall" color="accent-1" />
        </Box>
      </Box>
      <Box>
        <Circle size="xxsmallToxsmall" color="accent-3" />
        <Circle size="xxxsmall" color="neutral-3" />
        <Circle size="small" color="accent-4" />
      </Box>
    </Box>
    <Box flex />
    <Legend items={items} />
  </Tile>
);
