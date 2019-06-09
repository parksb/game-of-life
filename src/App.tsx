import "./Reset.scss";

import React from "react";
import {render} from "react-dom";

import {MenuContext, UserContext} from "./Context";
import {Menu} from "./menu/Menu";
import {TopBar} from "./top-bar/TopBar";
import {Content} from "./content/Content";

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

    return (
      <MenuContext.Provider value={{
        isOpen: isOpen,
        selectedIndex: selectedIndex,
        setOpen: this.setOpen,
        setSelectedIndex: this.setSelectedIndex,
      }}>
        <UserContext.Provider value={{
          name: 'Troy Tae',
          account: 'tjy970721@gmail.com',
        }}>
          <Menu/>
          <TopBar/>
          <Content/>
        </UserContext.Provider>
      </MenuContext.Provider>
    );
  }
}

render(<App/>, document.getElementById('app'));
