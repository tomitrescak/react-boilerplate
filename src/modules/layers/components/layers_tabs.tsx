import React, { FC } from 'react';

import { classes, styled, Action, numberAttribute, theme } from 'config/common';

const LayerHeader = styled.div`
  width: 100%;
  height: 40px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LayerList = styled.ul`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: flex-start;
`;

const LayerItem = styled.li`
  height: 100%;
  align-items: center;
  color: rgba(255, 255, 255, 0.4);
  border-left: 1px solid ${theme.paneBackground};
  border-right: 1px solid ${theme.divider};
  cursor: pointer;
  display: flex;
  font-size: 11px;
  font-weight: 400;
  justify-content: center;
  line-height: 15px;
  padding: 0 12px;
  transition: background-color 0.2s ease-out;

  &:hover,
  &.active {
    background-color: rgba(77, 77, 77, 0.17);
    border-left-color: ${theme.divider};
  }
  &.active {
    border-right-color: transparent;
    border-left: 1px solid rgba(77, 77, 77, 0.17);
    color: ${theme.paneText};
  }
`;

type Props = {
  /**
   * Id of the current tab
   *
   * @default 0
   */
  currentTab?: number;
  /**
   * Callback for setting the active tab
   */
  setTab: Action<number>;
  /**
   * List of tabs to display
   */
  tabs: string[];
};

const defaultTabs = ['LAYERS', 'INDICATORS'];

export const LayersTabs: FC<Props> = ({ currentTab = 0, setTab, tabs = defaultTabs }) => {
  const setActiveTab = React.useCallback(
    (e: React.MouseEvent<HTMLLIElement>) => {
      setTab(numberAttribute(e.currentTarget, 'data-tab'));
    },
    [setTab]
  );

  return (
    <>
      <LayerHeader>
        <LayerList>
          {tabs.map((tab, i) => (
            <LayerItem
              key={i}
              className={classes({ active: currentTab === i })}
              data-tab={i}
              onClick={setActiveTab}
            >
              {tab}
            </LayerItem>
          ))}
        </LayerList>
      </LayerHeader>
    </>
  );
};
