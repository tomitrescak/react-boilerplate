import React from 'react';

import { LayersContainer } from '../layers_container';

export default {
  title: 'Layers'
};

const Wrapper = () => <LayersContainer>werwer 12012</LayersContainer>;

export const LayerContainer = () => <Wrapper />;

LayerContainer.story = {
  name: 'default'
};
