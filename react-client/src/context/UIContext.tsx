import React from 'react';

interface UIContextInterface {
  isMenuHidden: boolean;
  showMenu: () => void;
  hideMenu: () => void;
}

export const UIContext = React.createContext<UIContextInterface | null>(null);

type Props = {
  children: React.ReactNode;
};

const UIProvider: React.FC<Props> = ({ children }) => {
  const [isMenuHidden, setIsMenuHidden] = React.useState(false);

  const showMenu = () => setIsMenuHidden(false);
  const hideMenu = () => setIsMenuHidden(true);

  const context: UIContextInterface = {
    isMenuHidden,
    showMenu,
    hideMenu,
  };

  return (
    <UIContext.Provider value={context}>
      {children}
    </UIContext.Provider>
  );
};

export default UIProvider;
