import React, { useState, useEffect } from 'react';

import { Box, Diagram, Stack, WorldMap } from 'grommet';
import { places, connections } from './data';
import { Tile } from '../../Tile';
import { Legend } from '../legend/Legend';
import { data as items } from '../legend/data';

export const GeographyByClient = ({ ...rest }) => {
  const [draw, setDraw] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      setDraw(!draw);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Tile title="Geography by Client" {...rest}>
      <Box flex overflow="hidden" alignSelf="center">
        <Stack fill>
          <WorldMap color="light-4" places={places} />
          {draw && <Diagram connections={connections} />}
        </Stack>
      </Box>
      <Legend items={items} showValue={false} />
    </Tile>
  );
};
