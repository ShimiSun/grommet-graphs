import React from 'react';

import { Box, Diagram, Stack, WorldMap } from 'grommet';
import { places, connections } from './data';
import { Tile } from '../../Tile';
import { Legend } from '../legend/Legend';
import { data as items } from '../legend/data';

export const GeographyByClient = () => (
  <Tile title="Geography by Client" width="large" overflow="hidden">
    <Stack>
      <Box>
        <WorldMap color="light-4" places={places} />
        <Legend items={items} showValue={false} />
      </Box>
      <Diagram connections={connections} />
    </Stack>
  </Tile>
);
