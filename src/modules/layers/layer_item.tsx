import React, { FC } from 'react';

import { useMergeState, styled, classes } from 'config/common';

const LayerItemWrapper = styled.li`
  width: 100%;
  height: 40px;
  min-height: 40px;

  &.active {
    background-color: rgba(#6aa3ff, 0.07);
  }

  &.show {
    height: auto;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 40px;
  align-items: center;
  display: flex;
  justify-content: flex-start;

  &.show {
  }
`;

const Folder = styled.div`
  width: calc(100% - 30px);
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const FolderHeader = styled.div`
  margin-left: 5px;
  cursor: pointer;

  &.show {
    border-bottom: 0.5px solid $black;
  }
`;

const FolderIcon = styled.img`
  margin-left: 10px;

  &.triangle {
    width: 12px;
    cursor: pointer;
    transform: rotate(180deg);

    &.show {
      transform: rotate(270deg);
    }
  }

  &.folder {
    width: 14px;
  }
`;

const FolderTitle = styled.span`
  color: rgba(#ffffff, 0.9);
  font-size: 13px;
  line-height: 18px;
  margin-left: 15px;
  &.small {
    font-size: 10px;
    line-height: 14px;
  }
`;

const FolderActions = styled.div`
  width: 20px;
  height: 100%;
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-right: 5px;
  position: relative;

  .threedots {
    height: 100%;
    background-color: transparent;
    background-image: url('https://deliverytestdata.blob.core.windows.net/deliverytest/dots.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    border: 0;
    cursor: pointer;
    outline: none;
  }
`;

const LayerContent = styled.div`
  display: none;
  max-height: 20vh;
  overflow: scroll;
`;

const LayerContentItem = styled.div`
  width: 95%;
  background-color: rgba(13, 14, 18, 0.88);
  border-right: 1px solid $black;
  margin: 0;
`;

const VisibilityToggle = styled.button`
  width: 40px;
  height: 100%;
  background-color: transparent;
  background-image: url('https://deliverytestdata.blob.core.windows.net/deliverytest/eye-close.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 28px;
  border: 0;
  border-right: 1px solid $black;
  cursor: pointer;
  outline: none;

  &.visible {
    background-image: url('https://deliverytestdata.blob.core.windows.net/deliverytest/eye.svg');
    background-size: 18px;
  }
`;

const TargetIcon = () => (
  <svg
    className="icon"
    xmlns="http://www.w3.org/2000/svg"
    width="13.251"
    height="13.25"
    viewBox="0 0 13.251 13.25"
  >
    <path
      fill="#fff"
      d="M11.989,5.522a.884.884,0,0,0-.414.087L7.59,1.711a1.048,1.048,0,0,0,.152-.523,1.133,1.133,0,0,0-2.265,0,1.187,1.187,0,0,0,.109.479L1.363,5.8c-.044,0-.087-.022-.131-.022a1.09,1.09,0,1,0,0,2.177,1.187,1.187,0,0,0,.479-.109L3.26,9.365l2.305,2.253a1.272,1.272,0,0,0-.087.392,1.133,1.133,0,0,0,2.265,0,1.17,1.17,0,0,0-.109-.457L11.64,7.612a1.681,1.681,0,0,0,.327.044A1.1,1.1,0,0,0,13.1,6.567,1.062,1.062,0,0,0,11.989,5.522ZM5.957,2.081a1.1,1.1,0,0,0,.653.2A1.171,1.171,0,0,0,7.22,2.1l3.9,3.832a1.085,1.085,0,0,0-.261.675,1.037,1.037,0,0,0,.3.74L7.286,11.161a1.177,1.177,0,0,0-1.394.022L2.147,7.5a1.037,1.037,0,0,0-.218-1.481Z"
      transform="translate(0.025 0.025)"
      stroke="#fff"
      strokeWidth="0.25"
    />
  </svg>
);

// const Layer

type Layer = {
  Name: string;
  item: {
    setVisible(visible: boolean): void;
    getVisible(): boolean;
  };
};

type Props = {
  className?: string;
  styleName?: string;
  layers: Layer[];
  zoomToLayer?: unknown;
  openComments?: unknown;
  folderName: string;
  map?: unknown;
  visible?: boolean;
};

export const LayerItem: FC<Props> = ({ visible, layers, folderName }) => {
  const [state, setState] = useMergeState({
    open: false,
    groupVisible: visible,
    currentLayer: null,
    layers: layers.map(layer => {
      return { Name: layer.Name, visible: false };
    })
  });

  const updateGroupVisible = React.useCallback(() => {
    layers.forEach((layer: any, key: number) => {
      layer.item.setVisible(!state.groupVisible);
    });
    let visibleLayers = state.layers;
    visibleLayers.forEach((layer: any, key: number) => {
      layer.visible = !state.groupVisible;
    });
    setState({ groupVisible: !state.groupVisible, layers: visibleLayers });
  }, [layers, setState, state.groupVisible, state.layers]);

  const updateLayerVisible = React.useCallback(
    (key: number) => {
      let currentLayers = state.layers;
      currentLayers[key].visible = !currentLayers[key].visible;
      setState({ layers: currentLayers });
      layers[key].item.setVisible(!layers[key].item.getVisible());
    },
    [setState, layers, state.layers]
  );

  // const downloadLayer = React.useCallback((_layer: Layer) => {
  //   // Should open a modal with all dates
  //   // window.open(layer.data.files[0].file, '_blank');
  //   alert('Download');
  // }, []);

  const visibleClass = classes({ visible: state.groupVisible });
  const showClass = classes({ visible: state.groupVisible });

  return (
    <LayerItemWrapper className={classes(visibleClass, showClass)}>
      <Header>
        <VisibilityToggle className={visibleClass} onClick={() => updateGroupVisible()} />
        <Folder
          onClick={() => {
            setState({ open: !state.open });
          }}
        >
          <FolderHeader className={showClass}>
            <FolderIcon
              className={classes('triangle', showClass)}
              src="https://deliverytestdata.blob.core.windows.net/deliverytest/triangle.svg"
            />
            <FolderIcon
              className="ifolder"
              src="https://deliverytestdata.blob.core.windows.net/deliverytest/cfolder.svg"
            />
            <FolderTitle>{folderName}</FolderTitle>
          </FolderHeader>
          <FolderActions>{false && <button className="threedots" />}</FolderActions>
        </Folder>
      </Header>
      <LayerContent>
        {layers &&
          layers.map((layer: any, key: number) => {
            return (
              <LayerContentItem className={classes({ visible: layer.item.getVisible() })} key={key}>
                <Header>
                  <VisibilityToggle onClick={() => updateLayerVisible(key)} />
                  <Folder>
                    <FolderHeader>
                      <TargetIcon />
                      <FolderTitle className="small">{layer.data.name}</FolderTitle>
                    </FolderHeader>
                    <FolderActions>
                      <button
                        className="threedots"
                        data-place="right"
                        data-tip
                        data-for="layerOptions"
                        data-effect="solid"
                        data-delay-hide={100}
                        data-delay-update={100}
                        onClick={() => setState({ currentLayer: layer })}
                      />
                    </FolderActions>
                  </Folder>
                </Header>
              </LayerContentItem>
            );
          })}
        {/* {layers && (
          <ReactTooltip
            id="layerOptions"
            isCapture={true}
            event="click"
            clickable={true}
            className="layer--tooltip--options"
          >
            <ul styleName="tooltiplist">
              <li styleName="item">
                <span styleName="link">Layer Properties</span>
              </li>
              <li styleName="item">
                <span styleName="link">Remove</span>
              </li>
              <li styleName="item">
                <span styleName="link">Rename</span>
              </li>
              <li styleName="item" onClick={() => this.props.zoomToLayer(this.state.currentLayer)}>
                <span styleName="link">Zoom In</span>
              </li>
              <li styleName="item">
                <span styleName="link">Add Bookmark</span>
              </li>
              <li styleName="item" onClick={() => this.props.openComments(this.state.currentLayer)}>
                <span styleName="link">Add Comment</span>
              </li>
              <li styleName="item" onClick={() => this.downloadLayer(this.state.currentLayer)}>
                <span styleName="link">Download</span>
              </li>
              <li styleName="item disabled">
                <span styleName="link">Table View</span>
              </li>
              <li styleName="item">
                <span styleName="link">Show Metadata</span>
              </li>
            </ul>
          </ReactTooltip>
        )} */}
      </LayerContent>
    </LayerItemWrapper>
  );
};
