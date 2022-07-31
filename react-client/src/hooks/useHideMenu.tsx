import { UIContext } from '../context/UIContext';
import React from 'react';

type Props = {
  shouldHideMenu: boolean;
};

export const useHideMenu = ({ shouldHideMenu }: Props) => {
  const { showMenu, hideMenu } = React.useContext(UIContext)!;

  React.useEffect(() => {
    if (shouldHideMenu) {
      hideMenu();
    } else {
      showMenu();
    }
  }, [shouldHideMenu]);
};
