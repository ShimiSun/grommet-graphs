import React from 'react';

import { Box } from 'grommet';

import { Tile } from '../../Tile';
import { AddButton } from './AddButton';

import { CampaignDiagram } from './CampaignDiagram';
import { Score } from './Score';

export const Campaigns = () => {
  return (
    <Tile title="Campaigns" width={{ min: 'middle' }}>
      <Score />
      <CampaignDiagram />
      <Box flex />
      <Box tag="footer" align="end" flex={false}>
        <AddButton />
      </Box>
    </Tile>
  );
};
