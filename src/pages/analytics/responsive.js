// import React from 'react';

export const responsiveRows = {
  small: ['auto', 'auto', 'auto', 'auto', 'auto'],
  medium: ['auto', 'auto', 'auto'],
  large: ['auto', 'auto'],
};

export const responsiveColumns = {
  small: ['flex'],
  medium: ['flex', 'flex', 'flex'],
  large: ['flex', 'flex', 'flex', 'flex'],
};

export const responsiveAreas = {
  small: [
    { name: 'allChannelActivity', start: [0, 0], end: [0, 0] },
    { name: 'budget', start: [0, 1], end: [0, 1] },
    { name: 'campaigns', start: [0, 2], end: [0, 2] },
    { name: 'conversations', start: [0, 3], end: [0, 3] },
    { name: 'geo', start: [0, 4], end: [0, 4] },
  ],
  medium: [
    { name: 'allChannelActivity', start: [0, 0], end: [1, 0] },
    { name: 'budget', start: [2, 0], end: [2, 0] },
    { name: 'conversations', start: [1, 1], end: [2, 1] },
    { name: 'campaigns', start: [0, 1], end: [0, 1] },
    { name: 'geo', start: [0, 2], end: [2, 2] },
  ],
  large: [
    { name: 'allChannelActivity', start: [0, 0], end: [1, 0] },
    { name: 'budget', start: [2, 0], end: [2, 0] },
    { name: 'campaigns', start: [3, 0], end: [3, 1] },
    { name: 'conversations', start: [0, 1], end: [0, 1] },
    { name: 'geo', start: [1, 1], end: [2, 1] },
  ],
};
