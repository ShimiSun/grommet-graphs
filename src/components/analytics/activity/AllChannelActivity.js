import React from 'react';

import { Box, Button, Text } from 'grommet';
import { Tile } from '../../Tile';

import { sample1 } from './data/sample1';
import { sample2 } from './data/sample2';
import { sample3 } from './data/sample3';
import { sample4 } from './data/sample4';
import { ActivityChart } from './ActivityChart';

const values1 = [];
sample1.map(point =>
  values1.push({ value: [point.time, point.moving_average] }),
);

let values = [values1];
const values2 = [];
sample2.map(point =>
  values2.push({ value: [point.time, point.moving_average] }),
);

const values3 = [];
sample3.map(point =>
  values3.push({ value: [point.time, point.moving_average] }),
);

const values4 = [];
sample4.map(point =>
  values4.push({ value: [point.time, point.moving_average] }),
);

values = [values1, values2, values3, values4];

export const AllChannelActivity = () => (
  <Tile title="All Channel Activity">
    <Box flex />
    <ActivityChart values={values} />
    <Box
      tag="footer"
      background="light-4"
      pad="small"
      round={{ size: 'small', corner: 'bottom' }}
    >
      {/* Footer */}
      <Box align="center" justify="between" direction="row">
        <Text size="xsmall" color="brand">
          120 conversations
        </Text>
        <Button primary label={<Text size="small">Refresh Feed</Text>} />
      </Box>
    </Box>
  </Tile>
);
