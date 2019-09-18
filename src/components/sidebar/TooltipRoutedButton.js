import React, { useRef, useState } from 'react';

import { Box, Drop } from 'grommet';
import { Analytics, Calculator, Stakeholder } from 'grommet-icons';

import RoutedButton from './RoutedButton';

export const TooltipRoutedButton = ({ iconName, index }) => {
  const [over, setOver] = useState();
  const iconsMap = color => [
    <Analytics color={color} />,
    <Stakeholder color={color} />,
    <Calculator color={color} />,
  ];
  const ref = useRef();
  return (
    <Box width="100%">
      {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events */}
      <RoutedButton
        forwardedRef={ref}
        onMouseOver={() => setOver(true)}
        onMouseLeave={() => setOver(false)}
        path="/"
        hoverIndicator="accent-1"
        plain
      >
        {({ hover }) => (
          <Box pad={{ vertical: 'small' }} align="center">
            {iconsMap(hover ? 'black' : 'white')[index]}
          </Box>
        )}
      </RoutedButton>
      {ref.current && over && (
        <Drop align={{ left: 'right' }} target={ref.current} plain>
          <Box
            animation="slideRight"
            margin="xsmall"
            pad="small"
            background="accent-1"
            round={{ size: 'medium', corner: 'right' }}
          >
            {iconName}
          </Box>
        </Drop>
      )}
    </Box>
  );
};
