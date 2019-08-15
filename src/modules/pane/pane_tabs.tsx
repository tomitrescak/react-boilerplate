import React, { FC } from 'react';

import { classes, styled, Action, numberAttribute, theme } from 'config/common';

const TabsContainer = styled.div`
  width: 100%;
  height: 40px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TabsList = styled.ul`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: flex-start;
`;

const TabItem = styled.li`
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

const Tab = styled.div`
  display: none;
  &.active {
    display: block;
  }
`;

type Props = {
  /**
   * List of tabs to display
   */
  tabs: string[];
};

const defaultTabs = ['LAYERS', 'INDICATORS'];

export const PaneTabs: FC<Props> = ({ children, tabs = defaultTabs }) => {
  const [currentTab, setTab] = React.useState(0);

  const setActiveTab = React.useCallback(
    (e: React.MouseEvent<HTMLLIElement>) => {
      setTab(numberAttribute(e.currentTarget, 'data-tab'));
    },
    [setTab]
  );

  return (
    <div>
      <TabsContainer>
        <TabsList>
          {tabs.map((tab, i) => (
            <TabItem
              key={i}
              className={classes({ active: currentTab === i })}
              data-tab={i}
              onClick={setActiveTab}
            >
              {tab}
            </TabItem>
          ))}
        </TabsList>
      </TabsContainer>
      {children &&
        Array.isArray(children) &&
        children.map((child, i) => (
          <Tab key={i} className={classes({ active: currentTab === i })}>
            {child}
          </Tab>
        ))}
    </div>
  );
};
