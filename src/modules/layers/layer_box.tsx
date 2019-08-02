import React, { FC, Fragment } from 'react';

import LayerItem from './components/LayerItem/LayerItem';

import * as styles from './LayerBox.css';

interface Props {
  className?: string;
  styleName?: string;
  map?: any;
  groups?: any;
  onLayerVisibleChange?: any;
  metrics?: any;
  openComments: any;
  aoi?: any;
}

interface State {
  size: string;
  currentTool: number;
  currentTab: number;
}

class LayerBox extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      size: 'small',
      currentTool: 0,
      currentTab: 0
    };
  }

  private zoomToLayer(layer: any) {
    // const bounding = layer.capabilities.WMS_Capabilities.Capability.Layer.Layer.BoundingBox[0]['@attributes'];
    console.log(layer);

    // map.getView().fitExtent(extent, map.getSize());
  }

  public render() {
    return (
      <div styleName="layerbox" className={this.props.className}>
        <div styleName="header">
          <ul styleName="tab--wrapper">
            <li
              styleName={`tab ${this.state.currentTab === 0 ? 'active' : ''}`}
              onClick={() => this.setState({ currentTab: 0 })}
            >
              LAYERS
            </li>
            {false && (
              <li
                styleName={`tab ${this.state.currentTab === 1 ? 'active' : ''}`}
                onClick={() => {
                  this.props.metrics();
                }}
              >
                INDICATORS
              </li>
            )}
          </ul>
        </div>
        <ul styleName="tools">
          <li
            styleName={`item ${this.state.currentTool === 0 ? 'active' : ''}`}
            onClick={() => this.setState({ currentTool: 0 })}
          >
            <img
              styleName="icon"
              src="https://deliverytestdata.blob.core.windows.net/deliverytest/cursor.svg"
            />
          </li>
          {false && (
            <li
              styleName={`item ${this.state.currentTool === 1 ? 'active' : ''}`}
              onClick={() => this.setState({ currentTool: 1 })}
            >
              <img
                styleName="icon"
                src="https://deliverytestdata.blob.core.windows.net/deliverytest/pluma.svg"
              />
            </li>
          )}
          {false && (
            <li
              styleName={`item ${this.state.currentTool === 2 ? 'active' : ''}`}
              onClick={() => this.setState({ currentTool: 2 })}
            >
              <img
                styleName="icon"
                src="https://deliverytestdata.blob.core.windows.net/deliverytest/measure.svg"
              />
            </li>
          )}
        </ul>
        <ul styleName="list">
          {this.props.groups[0] && (
            <LayerItem
              layers={this.props.groups[0] ? this.props.groups[0] : []}
              zoomToLayer={(layer: any) => this.zoomToLayer(layer)}
              openComments={(layer: any) => this.props.openComments(layer)}
              folderName="Advanced AI Layers"
            />
          )}
          {this.props.groups[1] && (
            <LayerItem
              layers={this.props.groups[1] ? this.props.groups[1] : []}
              zoomToLayer={(layer: any) => this.zoomToLayer(layer)}
              openComments={(layer: any) => this.props.openComments(layer)}
              folderName="Derived Layers"
            />
          )}
          {this.props.groups[2] && (
            <LayerItem
              layers={this.props.groups[2] ? this.props.groups[2] : []}
              zoomToLayer={(layer: any) => this.zoomToLayer(layer)}
              openComments={(layer: any) => this.props.openComments(layer)}
              folderName="Primary Layers"
            />
          )}
          {false && (
            <LayerItem
              layers={[this.props.aoi]}
              visible={true}
              zoomToLayer={(layer: any) => this.zoomToLayer(layer)}
              openComments={(layer: any) => this.props.openComments(layer)}
              folderName="AoIs"
            />
          )}
        </ul>
      </div>
    );
  }
}

export default CSSModules(LayerBox, styles, { allowMultiple: true });
