import * as React from 'react';
import {render} from 'react-dom';
import {Grid} from '@material/react-layout-grid';
import {TopAppBarFixedAdjust} from '@material/react-top-app-bar';

import Button from './button';
import Checkbox from './checkbox';
import TopAppBar from './top-app-bar'

import './reset.scss';

class Component extends React.Component {
  render() {
    return <div>
      <TopAppBar/>
      <TopAppBarFixedAdjust>
        <Grid>
          <h1>Button</h1><Button/>
          <h1>Checkbox</h1><Checkbox/>
        </Grid>
      </TopAppBarFixedAdjust>
    </div>;
  }
}

render(<Component/>, document.getElementById('app'));
