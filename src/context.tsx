import * as React from 'react';

export const MenuContext = React.createContext({
  isOpen: false,
  setOpen: (open: boolean) => {},
});
