import React, { createRef, Component } from 'react';

import { Box, Drop } from 'grommet';
import { Analytics, Calculator, Stakeholder } from 'grommet-icons';

import RoutedButton from './RoutedButton';
import { UserMenu, NotificationAlert } from './';
import { GradientGremlin } from './GradientGremlin';

export class Sidebar extends Component {
  state = {};

  iconsMap = color => [
    <Analytics color={color} />,
    <Stakeholder color={color} />,
    <Calculator color={color} />,
  ];
  ref = createRef();

  render() {
    const { over } = this.state;
    return (
      <Box width="sidebar" background="brand" overflow="auto">
        <Box align="center" gap="medium" pad={{ vertical: 'small' }}>
          <GradientGremlin />
        </Box>
        <Box align="center">
          {[0, 1, 2].map(index => (
            <Box key={index} width="100%">
              <RoutedButton
                forwardedRef={this.ref}
                onMouseOver={() => this.setState({ over: true })}
                onMouseOut={() => this.setState({ over: false })}
                path="/"
                hoverIndicator="accent-1"
                plain
              >
                {({ hover }) => (
                  <Box pad={{ vertical: 'small' }} align="center">
                    {this.iconsMap(hover ? 'black' : 'white')[index]}
                  </Box>
                )}
              </RoutedButton>
              {this.ref.current && over && (
                <Drop align={{ left: 'right' }} target={this.ref.current} plain>
                  <Box
                    animation="slideRight"
                    margin="xsmall"
                    pad="small"
                    background="accent-1"
                    round={{ size: 'medium', corner: 'left' }}
                  >
                    Analytics
                  </Box>
                </Drop>
              )}
            </Box>
          ))}
        </Box>
        <Box flex />
        <Box pad={{ vertical: 'small' }}>
          <NotificationAlert />
          <UserMenu alignSelf="center" />
        </Box>
      </Box>
    );
  }
}
