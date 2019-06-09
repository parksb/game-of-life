import './Reset.scss';

import React from 'react';
import {render} from 'react-dom';
import {TopAppBarFixedAdjust} from '@material/react-top-app-bar';

import Button from './button';
import Card from './card';
import Checkbox from './checkbox';
import Radio from './radio';
import Select from './select';
import TopAppBar from './top-app-bar'
import Drawer from './drawer'
import {MenuContext} from './Context';

class App extends React.Component {
  state = {
    menu: {
      isOpen: false,
      selectedIndex: 0,
    },
  };

  setOpen = (isOpen: boolean) => {
    this.state.menu.isOpen = isOpen;
    this.setState(this.state);
  };

  setSelectedIndex = (selectedIndex: number) => {
    this.state.menu.selectedIndex = selectedIndex;
    this.setState(this.state);
  };

  render() {
    const {
      isOpen,
      selectedIndex,
    } = this.state.menu;
    return <MenuContext.Provider value={{
      isOpen: isOpen,
      selectedIndex: selectedIndex,
      setOpen: this.setOpen,
      setSelectedIndex: this.setSelectedIndex,
    }}>
      <Drawer />
      <TopAppBar />
      <TopAppBarFixedAdjust>
        {
          selectedIndex === 0 ? <Button /> :
          selectedIndex === 1 ? <Card /> :
          selectedIndex === 2 ? <Checkbox /> :
          selectedIndex === 3 ? <Radio /> :
          selectedIndex === 4 ? <Select /> : null
        }
      </TopAppBarFixedAdjust>
    </MenuContext.Provider>;
  }
}

render(<App/>, document.getElementById('app'));
