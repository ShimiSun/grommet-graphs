import React, { useContext } from 'react';

import { Box, ResponsiveContext } from 'grommet';

import { TooltipRoutedButton } from './TooltipRoutedButton';
import { UserMenu, NotificationAlert } from './index';
import { GradientGremlin } from './GradientGremlin';

export const Sidebar = () => {
  const size = useContext(ResponsiveContext);

  return (
    <Box background="brand" overflow="auto">
      <Box align="center" pad={{ vertical: 'small' }}>
        <GradientGremlin />
      </Box>
      <Box align="center" gap={size === 'small' ? 'medium' : 'small'}>
        {['Analytics', 'Stakeholder', 'Calculator'].map((iconName, index) => (
          <TooltipRoutedButton
            key={iconName}
            iconName={iconName}
            index={index}
          />
        ))}
      </Box>
      <Box flex />
      <Box pad={{ vertical: 'small' }}>
        <NotificationAlert />
        <UserMenu alignSelf="center" />
      </Box>
    </Box>
  );
};
