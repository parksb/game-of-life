import * as React from 'react';

import MaterialIcon from "@material/react-material-icon";
import TopAppBar, {
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle
} from "@material/react-top-app-bar";

import {MenuContext} from '../Context';

const styles = require('./index.scss');

export default () => <MenuContext.Consumer>
  {({setOpen}) => (
    <TopAppBar>
      <TopAppBarRow>
        <TopAppBarSection align='start'>
          <TopAppBarIcon navIcon tabIndex={0}>
            <MaterialIcon hasRipple icon='menu' onClick={() => setOpen(true)}/>
          </TopAppBarIcon>
          <TopAppBarTitle className={styles.title}>Material Components React</TopAppBarTitle>
        </TopAppBarSection>
        <TopAppBarSection align='end'>
          <TopAppBarIcon actionItem tabIndex={0}>
            <MaterialIcon
              aria-label="exit_to_app"
              hasRipple
              icon='exit_to_app'
              onClick={() => console.log('exit_to_app')}
            />
          </TopAppBarIcon>
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
  )}
</MenuContext.Consumer>;
