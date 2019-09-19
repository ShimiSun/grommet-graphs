import React, { useContext } from 'react';

import { Box, Meter, ResponsiveContext, Stack, Text } from 'grommet';
import { Tile } from '../../Tile';
import { Legend } from '../legend/Legend';
import { data } from '../legend/data';

export const Budget = () => {
  const responsiveSize = useContext(ResponsiveContext);
  return (
    <Tile title="Budget">
      <Text alignSelf="center" size="small">
        Spending by Client
      </Text>
      <Box margin="medium">
        {/* Using Stack to place the text in the middle of Meter */}
        <Stack anchor="center" guidingChild="last" alignSelf="center">
          <Text weight="bold" size="xlarge">
            92%
          </Text>
          <Meter
            size={responsiveSize === 'large' ? 'meterMedium' : 'meter'}
            thickness={responsiveSize === 'large' ? 'large' : 'medium'}
            type="circle"
            values={data}
          />
        </Stack>
      </Box>
      <Box flex />
      <Legend items={data} />
    </Tile>
  );
};
