import React, { useReducer, useEffect } from 'react';

import { Box, Diagram, Stack, WorldMap } from 'grommet';
import { places, connections } from './data';
import { Tile } from '../../Tile';
import { Legend } from '../legend/Legend';
import { data as items } from '../legend/data';

export const GeographyByClient = ({ ...rest }) => {
  const reducer = draw => !draw;

  const [draw, toogleDraw] = useReducer(reducer, false);

  useEffect(() => {
    const timer = setInterval(() => {
      toogleDraw();
    }, 3000);
    return () => clearInterval(timer);
  }, [toogleDraw]);

  return (
    <Tile title="Geography by Client" {...rest}>
      <Box flex overflow="hidden" alignSelf="center">
        <Stack fill>
          <WorldMap fill color="light-4" places={places} />
          {draw && <Diagram connections={connections} />}
        </Stack>
      </Box>
      <Legend items={items} showValue={false} />
    </Tile>
  );
};
