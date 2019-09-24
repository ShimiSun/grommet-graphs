import React, { useState } from 'react';

import { Box, Button, Text } from 'grommet';

import { Tile } from '../../Tile';
import { processData } from './data/processData';
import { ActivityChart } from './ActivityChart';

const shuffelValues = () => processData(true);

export const AllChannelActivity = ({ ...rest }) => {
  const [count, setCount] = useState(120);

  const onRefreshFeedClick = () => {
    setCount(count + 1);
  };
  return (
    <Tile title="All Channel Activity" {...rest}>
      <Box flex />
      <ActivityChart values={shuffelValues()} />
      <Box
        tag="footer"
        background="light-4"
        pad="small"
        round={{ size: 'small', corner: 'bottom' }}
      >
        {/* Footer */}
        <Box
          align="center"
          justify="between"
          direction="row"
          animation={{ size: 'xlarge', type: 'zoomIn' }}
        >
          <Text size="medium" color="brand">
            {count} conversations
          </Text>
          <Button
            label={<Text size="small">Refresh Feed</Text>}
            onClick={onRefreshFeedClick}
          />
        </Box>
      </Box>
    </Tile>
  );
};
