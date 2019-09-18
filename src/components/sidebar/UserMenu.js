import React from 'react';

import { Box, Menu, Text } from 'grommet';

import { Avatar } from './';

// TODO clean-up
export const UserMenu = ({ user = {}, items = [], ...rest }) => (
  <Menu
    dropAlign={{ top: 'bottom', right: 'right' }}
    icon={false}
    items={items.map(item => ({
      ...item,
      label: <Text size="small">{item.label}</Text>,
      onClick: () => {}, // no-op
    }))}
    label={<Avatar />}
    {...rest}
  />
);
