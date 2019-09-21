import React from 'react';

import { Box, Button } from 'grommet';
import { Add } from 'grommet-icons';

export const AddButton = ({ color, ...rest }) => (
  <Box
    round="full"
    background={color}
    margin={{ bottom: 'small', right: 'small' }}
    width="xxsmall"
    height="xxsmall"
  >
    <Button icon={<Add />} {...rest} />
  </Box>
);
