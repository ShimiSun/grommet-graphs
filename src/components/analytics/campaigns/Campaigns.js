import React, { useState } from 'react';

import { Tile } from '../../Tile';

import { CampaignDiagram } from './CampaignDiagram';
import { Score } from './Score';

const initialCampaigns = 8;

export const Campaigns = () => {
  const [campaignsNumber, setCampaignsNumber] = useState(8);

  const onChangeCampaigns = value => {
    const calcValue = value === 0 ? initialCampaigns : value + campaignsNumber;
    setCampaignsNumber(calcValue);
  };

  return (
    <Tile title="Campaigns">
      <Score mergeState={onChangeCampaigns} campaignsNumber={campaignsNumber} />
      <CampaignDiagram onChangeCampaigns={onChangeCampaigns} />
    </Tile>
  );
};
