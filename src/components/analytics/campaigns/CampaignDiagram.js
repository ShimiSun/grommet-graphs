import React, { useState } from 'react';

import { Box, Button, Diagram, Stack } from 'grommet';
import { Refresh } from 'grommet-icons';

import { Node, InitialNodes } from './Node';
import { AddButton } from './AddButton';
import { connections as data } from './connections';

export const CampaignDiagram = ({ onChangeCampaigns }) => {
  const [addedNodes, setAddedNodes] = useState();
  const [totalNumberOfNodesAdded, setTotalNumberOfNodesAdded] = useState(0);
  const initialNodesNumber = 9;
  const initialConnections = 5;

  const onRefresh = () => {
    setTotalNumberOfNodesAdded(0);
    setAddedNodes(undefined);
    onChangeCampaigns(0);
  };
  const onAddClick = () => {
    let index = 0;
    const boxedItems = [];
    let nodeItems = [];
    while (index <= totalNumberOfNodesAdded) {
      nodeItems.push(
        <Node
          id={index + initialNodesNumber}
          key={index + initialNodesNumber}
        />,
      );
      if (
        (index > 0 && (index + 1) % 3 === 0) ||
        index === totalNumberOfNodesAdded
      ) {
        boxedItems.push(
          <Box direction="row" key={index}>
            {nodeItems}
          </Box>,
        );
        nodeItems = [];
      }
      index += 1;
    }
    onChangeCampaigns(1);
    setTotalNumberOfNodesAdded(totalNumberOfNodesAdded + 1);
    // update the score
    setAddedNodes(<Box>{boxedItems}</Box>);
  };

  // limit the additional added Nodes to 5
  const isDisabled = totalNumberOfNodesAdded >= 5;
  const connections = data.slice(
    0,
    initialConnections + totalNumberOfNodesAdded,
  );
  return (
    <Box fill>
      <Box align="center" pad={{ vertical: 'medium' }}>
        <Stack guidingChild={1}>
          <Diagram connections={connections} />
          <Box>
            <InitialNodes />
            {addedNodes}
          </Box>
        </Stack>
      </Box>
      <Box flex />

      {/*  Footer */}
      <Box
        tag="footer"
        align="end"
        direction={isDisabled ? 'row' : 'column'}
        justify={isDisabled ? 'between' : 'stretch'}
      >
        {isDisabled && (
          <Box align="center" alignContent="center" pad="small">
            <Button onClick={onRefresh}>
              <Refresh color="brand" />
            </Button>
          </Box>
        )}
        <AddButton
          onClick={onAddClick}
          disabled={isDisabled}
          color={isDisabled ? 'light-1' : 'brand'}
        />
      </Box>
    </Box>
  );
};
