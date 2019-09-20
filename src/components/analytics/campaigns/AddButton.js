import React from 'react';

import { Box, Button } from 'grommet';
import { Add } from 'grommet-icons';

export const AddButton = ({ ...rest }) => (
  <Box
    round="full"
    background="brand"
    margin={{ bottom: 'small', right: 'small' }}
    width="xxsmall"
    height="xxsmall"
    align="center"
    alignContent="center"
  >
    <Button icon={<Add />} {...rest} />
  </Box>
);
