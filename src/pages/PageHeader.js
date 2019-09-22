import React from 'react';

import { Box, Heading } from 'grommet';
import { Configure } from 'grommet-icons';

export const PageHeader = ({ name, ...rest }) => (
  <Box
    margin={{ horizontal: 'large', bottom: 'small' }}
    justify="between"
    direction="row"
    border={{ side: 'bottom', color: 'light-4' }}
    {...rest}
  >
    <Heading level={2} size="xsmall">
      {name}
    </Heading>
    <Box alignSelf="center">
      <Configure color="brand" />
    </Box>
  </Box>
);
