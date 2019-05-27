import * as React from 'react';
import {render} from 'react-dom';
import {Grid} from '@material/react-layout-grid';
import {TopAppBarFixedAdjust} from '@material/react-top-app-bar';

import Button from './button';
import Checkbox from './checkbox';
import TopAppBar from './top-app-bar'
import Drawer from './drawer'
import {MenuContext} from './context';

import './reset.scss';

class Component extends React.Component {
  state = {
    menu: {
      isOpen: false,
    },
  };

  setOpen = (open: boolean) => {
    this.setState({
      menu: { isOpen: open },
    });
  };

  render() {
    return <MenuContext.Provider value={{
      isOpen: this.state.menu.isOpen,
      setOpen: this.setOpen,
    }}>
      <Drawer />
      <TopAppBar />
      <TopAppBarFixedAdjust>
        <Grid>
          <h1>Button</h1><Button/>
          <h1>Checkbox</h1><Checkbox/>
        </Grid>
      </TopAppBarFixedAdjust>
    </MenuContext.Provider>;
  }
}

render(<Component/>, document.getElementById('app'));
