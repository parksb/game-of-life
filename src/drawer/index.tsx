import * as React from 'react';

import Drawer, {DrawerContent, DrawerHeader, DrawerTitle} from '@material/react-drawer';
import List, {ListItem, ListItemGraphic, ListItemText} from '@material/react-list';
import MaterialIcon from '@material/react-material-icon';

import {MenuContext} from '../context';

export default () => <MenuContext.Consumer>
  {({isOpen, setOpen}) => (
    <Drawer
      modal
      open={isOpen}
      onClose={() => setOpen(false)}>
      <DrawerHeader>
        <DrawerTitle tag='h2'>
          jane.smith@gmail.com
        </DrawerTitle>
      </DrawerHeader>

      <DrawerContent>
        <List singleSelection selectedIndex={0}>
          <ListItem>
            <ListItemGraphic graphic={<MaterialIcon icon='folder'/>} />
            <ListItemText primaryText='Mail' />
          </ListItem>
        </List>
      </DrawerContent>
    </Drawer>
  )}
</MenuContext.Consumer>;
