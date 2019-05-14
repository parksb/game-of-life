import * as React from 'react';

import MaterialIcon from "@material/react-material-icon";
import TopAppBar, {
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle
} from "@material/react-top-app-bar";

export default () => <TopAppBar>
  <TopAppBarRow>
    <TopAppBarSection align='start'>
      <TopAppBarIcon navIcon tabIndex={0}>
        <MaterialIcon hasRipple icon='menu' onClick={() => console.log('click')}/>
      </TopAppBarIcon>
      <TopAppBarTitle>Material Components</TopAppBarTitle>
    </TopAppBarSection>
    <TopAppBarSection align='end' role='toolbar'>
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
</TopAppBar>;
