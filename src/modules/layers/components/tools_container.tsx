import React, { FC } from 'react';

import { classes, Action, stringAttribute, theme, styled } from 'config/common';

const ToolsList = styled.ul`
  width: 100%;
  height: 40px;
  min-height: 40px;
  align-items: center;
  border: 1px solid ${theme.divider};
  display: flex;
  justify-content: flex-start;
`;
ToolsList.displayName = 'ToolsList';

const ToolItem = styled.li`
  width: 40px;
  height: 30px;
  align-items: center;
  border: 1px solid ${theme.divider};
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-left: 10px;
  &:hover,
  &.active {
    background-color: ${theme.paneActive};
  }
  .icon {
    width: 18px;
  }
`;
ToolItem.displayName = 'ToolItem';

// const ToolIcon = styled.img`
//   width: 18px;
// `;

const ToolIcon = styled.img`
  width: 18px;
  label: Icon;
`;
ToolIcon.displayName = 'ToolIcon';

type Props = {
  setTool: Action<string>;
};

const tools = [
  {
    name: 'select',
    icon: 'https://deliverytestdata.blob.core.windows.net/deliverytest/cursor.svg'
  },
  {
    name: 'edit',
    icon: 'https://deliverytestdata.blob.core.windows.net/deliverytest/pluma.svg'
  },
  {
    name: 'measure',
    icon: 'https://deliverytestdata.blob.core.windows.net/deliverytest/measure.svg'
  }
];

export const ToolsContainer: FC<Props> = ({ setTool }) => {
  const [tool, setToolActive] = React.useState('select');
  const setToolHandler = React.useCallback(
    (e: React.MouseEvent<HTMLLIElement>) => {
      const tool = stringAttribute(e.currentTarget, 'data-tool');
      setToolActive(tool);
      setTool(tool);
    },
    [setTool]
  );

  return (
    <ToolsList>
      {tools.map(t => (
        <ToolItem
          key={t.name}
          className={classes({ active: tool === t.name })}
          data-tool={t.name}
          onClick={setToolHandler}
        >
          <ToolIcon src={t.icon} />
        </ToolItem>
      ))}
    </ToolsList>
  );
};
