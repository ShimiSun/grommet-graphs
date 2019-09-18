import React from 'react';

import { Box, Meter, Text, Stack } from 'grommet';
import { Tile } from '../../Tile';
import { Legend } from '../legend/Legend';
import { data } from '../legend/data';

export const Budget = () => {
  return (
    <Tile title="Budget" width={{ min: 'middle' }}>
      <Text alignSelf="center" size="small">
        Spending by Client
      </Text>
      <Box margin="medium">
        {/* Using Stack to place the text in the middle of Meter */}
        <Stack anchor="center" guidingChild="last" alignSelf="center">
          <Text weight="bold" size="xlarge">
            92%
          </Text>
          <Meter size="meter" thickness="medium" type="circle" values={data} />
        </Stack>
      </Box>
      <Box flex />
      <Legend items={data} />
    </Tile>
  );
};
