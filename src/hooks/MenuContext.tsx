import React, { createContext, useState, useContext } from "react";

interface MenuContextData {
  ToggleMenu(toggleState: boolean): void;
  toggleState: boolean;
}

const MenuContext = createContext<MenuContextData>({} as MenuContextData);

const MenuProvider: React.FC = ({ children }) => {
  const [toggleState, setToggleState] = useState(false);

  const ToggleMenu = () => {
    return setToggleState(!toggleState);
  };

  return (
    <MenuContext.Provider value={{ ToggleMenu, toggleState }}>
      {children}
    </MenuContext.Provider>
  );
};

function useMenu(): MenuContextData {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }

  return context;
}

export { MenuProvider, useMenu };
