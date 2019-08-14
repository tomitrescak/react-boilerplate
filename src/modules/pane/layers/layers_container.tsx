import React from 'react';
import { LayerItem } from './layer_item';
import { PaneContainer } from '../pane_container';

export const LayersContainer = ({ groups, openComments }) => {
  const zoomToLayer = React.useCallback((layer: any) => {
    console.log(layer);
  }, []);

  return (
    <PaneContainer>
      <ul className="list">
        {groups[0] && (
          <LayerItem
            layers={groups[0] ? groups[0] : []}
            zoomToLayer={(layer: any) => zoomToLayer(layer)}
            openComments={(layer: any) => openComments(layer)}
            folderName="Advanced AI Layers"
          />
        )}
        {groups[1] && (
          <LayerItem
            layers={groups[1] ? groups[1] : []}
            zoomToLayer={(layer: any) => zoomToLayer(layer)}
            openComments={(layer: any) => openComments(layer)}
            folderName="Derived Layers"
          />
        )}
        {groups[2] && (
          <LayerItem
            layers={groups[2] ? groups[2] : []}
            zoomToLayer={(layer: any) => zoomToLayer(layer)}
            openComments={(layer: any) => openComments(layer)}
            folderName="Primary Layers"
          />
        )}
      </ul>
    </PaneContainer>
  );
};
