import React from 'react';

import { Box, Text } from 'grommet';

const ScoreItem = ({ number, desc }) => (
  <Box fill align="center">
    <Text alignSelf="center" size="xlarge" weight="bold">
      {number}
    </Text>
    <Text size="xsmall">{desc}</Text>
  </Box>
);

export const Score = ({ campaignsNumber }) => (
  <Box direction="row" gap="medium">
    <ScoreItem number={4} desc="Clients" />
    <ScoreItem number={3} desc="Channels" />
    <ScoreItem number={campaignsNumber} desc="Campaigns" />
    <ScoreItem number={2} desc="Profiles" />
  </Box>
);
