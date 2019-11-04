import React, { useContext } from 'react';

import { Box, Grid, ResponsiveContext } from 'grommet';
import { AllChannelActivity } from '../../components/analytics/activity/AllChannelActivity';
import { Campaigns } from '../../components/analytics/campaigns/Campaigns';
import { Budget } from '../../components/analytics/budget/Budget';
import { GeographyByClient } from '../../components/analytics/geo/GeographyByClient';
import { Coversations } from '../../components/analytics/conversations/Conversations';
import { PageHeader } from '../PageHeader';
import {
  responsiveAreas,
  responsiveColumns,
  responsiveRows,
} from './responsive';

export const Analytics = () => {
  const size = useContext(ResponsiveContext);

  return (
    <Box flex={false} pad="medium">
      <PageHeader name="Analytics" />
      <Box flex={false}>
        <Grid
          align="center"
          gap="medium"
          rows={responsiveRows[size]}
          columns={responsiveColumns[size]}
          areas={responsiveAreas[size]}
        >
          <AllChannelActivity gridArea="allChannelActivity" />
          <Budget gridArea="budget" />
          <Campaigns gridArea="campaigns" />
          <Coversations gridArea="conversations" />
          <GeographyByClient gridArea="geo" />
        </Grid>
      </Box>
    </Box>
  );
};
