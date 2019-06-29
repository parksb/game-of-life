import "./Reset.scss";

import React from "react";
import {render} from "react-dom";
import Fab from "@material/react-fab";
import MaterialIcon from "@material/react-material-icon";

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
          <a target='_blank' href='https://github.com/TroyTae/material-components-web-react-example/issues' style={{
            position: 'fixed',
            right: '20px',
            bottom: '30px',
          }}>
            <Fab icon={<MaterialIcon icon='bug_report' />} />
          </a>
        </UserContext.Provider>
      </MenuContext.Provider>
    );
  }
}

render(<App/>, document.getElementById('app'));
