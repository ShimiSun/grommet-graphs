import React from 'react';

import { Box } from 'grommet';

import { TooltipRoutedButton } from './TooltipRoutedButton';
import { UserMenu, NotificationAlert } from './index';
import { GradientGremlin } from './GradientGremlin';

export const Sidebar = () => (
  <Box width="sidebar" background="brand" overflow="auto">
    <Box align="center" gap="medium" pad={{ vertical: 'small' }}>
      <GradientGremlin />
    </Box>
    <Box align="center">
      {['Analytics', 'Stakeholder', 'Calculator'].map((iconName, index) => (
        <TooltipRoutedButton key={iconName} iconName={iconName} index={index} />
      ))}
    </Box>
    <Box flex />
    <Box pad={{ vertical: 'small' }}>
      <NotificationAlert />
      <UserMenu alignSelf="center" />
    </Box>
  </Box>
);
