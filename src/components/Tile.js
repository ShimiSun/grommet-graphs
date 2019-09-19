import React from 'react';

import { Box, Button, Text } from 'grommet';
import { More } from 'grommet-icons';

export const Tile = ({ children, title, ...rest }) => (
  <Box elevation="medium" fill round="small" overflow="auto" {...rest}>
    <Box
      tag="header"
      pad={{ horizontal: 'small', top: 'small', bottom: 'medium' }}
      direction="row"
      justify="between"
      align="center"
    >
      <Text size="small" weight="bold" color="black">
        {title}
      </Text>
      <Button icon={<More size="small" color="brand" />} />
    </Box>
    {children}
  </Box>
);
