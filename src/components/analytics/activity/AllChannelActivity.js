import React from 'react';

import { Box, Button, Text } from 'grommet';
import { Refresh } from 'grommet-icons';

import { Tile } from '../../Tile';
import { processsData } from './data/processData';
import { ActivityChart } from './ActivityChart';

export const AllChannelActivity = ({ ...rest }) => (
  <Tile title="All Channel Activity" {...rest}>
    <Box flex />
    <ActivityChart values={processsData} />
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
        <Button icon={Refresh} label={<Text size="small">Refresh Feed</Text>} />
      </Box>
    </Box>
  </Tile>
);
