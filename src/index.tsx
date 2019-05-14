import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Button from './button';
import Checkbox from './checkbox';
import {Grid} from '@material/react-layout-grid';

import './reset.scss';

const Component = () => <Grid>
  <h1>Button</h1><Button/>
  <h1>Checkbox</h1><Checkbox/>
</Grid>;

ReactDOM.render(<Component/>, document.getElementById('app'));
