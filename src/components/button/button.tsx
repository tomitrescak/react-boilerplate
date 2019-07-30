import React, { FC } from 'react';
import styled from 'styled-components';

import { useTranslation, Trans } from 'react-i18next';

export interface ButtonProps {
  /**
   * Text of the button
   *
   * @default ""
   **/
  content: string;
  /**
   * function to execute on click
   */
  onClick?: (e: unknown) => void;
}
const FancyButton = styled.button`
  border: 1px solid #eee;
  border-radius: 3px;
  background-color: white;
  cursor: pointer;
  font-size: 15px;
  padding: 3px 10px;
  margin: 10px;
`;

export const Button: FC<ButtonProps> = props => {
  // you can use hook for the translation
  // https://react.i18next.com/latest/usetranslation-hook
  const { t } = useTranslation();
  return (
    <>
      <div>
        {/* Or you can use the Trans component 
            https://react.i18next.com/latest/trans-component */}
        <Trans i18nKey="title" />
      </div>
      <FancyButton onClick={props.onClick}>{props.content}</FancyButton>
      <div>{t('subTitle')}</div>
    </>
  );
};
export default Button;
