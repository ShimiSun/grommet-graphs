import React from 'react';

import { Box } from 'grommet';
import { AllChannelActivity } from '../components/analytics/activity/AllChannelActivity';
import { Campaigns } from '../components/analytics/campaigns/Campaigns';
import { Budget } from '../components/analytics/budget/Budget';
import { GeographyByClient } from '../components/analytics/geo/GeographyByClient';
import { Coversations } from '../components/analytics/conversations/Conversations';

export const Analytics = () => (
  <Box overflow="auto" flex={false}>
    <Box pad="small" direction="row-responsive" gap="small">
      <AllChannelActivity />
      <Coversations />
      <Budget />
    </Box>
    <Box pad="small" direction="row-responsive" gap="small">
      <Campaigns />
      <GeographyByClient />
    </Box>
  </Box>
);
