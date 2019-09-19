import React from 'react';

import { Grid, Box } from 'grommet';
import { AllChannelActivity } from '../components/analytics/activity/AllChannelActivity';
import { Campaigns } from '../components/analytics/campaigns/Campaigns';
import { Budget } from '../components/analytics/budget/Budget';
import { GeographyByClient } from '../components/analytics/geo/GeographyByClient';
import { Coversations } from '../components/analytics/conversations/Conversations';

export const Analytics = () => (
  <Grid
    fill
    gap="small"
    rows={['flex', 'flex']}
    columns={['flex', 'flex', 'flex', 'flex']}
    areas={[
      { name: 'allChannelActivity', start: [0, 0], end: [1, 0] },
      { name: 'budget', start: [2, 0], end: [2, 0] },
      { name: 'conversations', start: [3, 0], end: [3, 0] },
      { name: 'campaigns', start: [0, 1], end: [0, 1] },
      { name: 'geo', start: [1, 1], end: [3, 1] },
    ]}
  >
    {/* <Box pad="small" background="accent-1" gridArea="allChannelActivity" />
    <Box pad="small" background="accent-2" gridArea="budget" />
    <Box pad="small" background="accent-1" gridArea="conversations" />
    <Box pad="small" background="accent-3" gridArea="campaigns" />
    <Box pad="small" background="accent-4" gridArea="geo" /> */}
    <Box gridArea="allChannelActivity">
      <AllChannelActivity />
    </Box>
    <Box gridArea="budget">
      <Budget gridArea="budget" />
    </Box>
    <Box gridArea="conversations">
      <Coversations />
    </Box>
    <Box gridArea="campaigns">
      <Campaigns />
    </Box>
    <Box gridArea="geo">
      <GeographyByClient />
    </Box>
  </Grid>
);
