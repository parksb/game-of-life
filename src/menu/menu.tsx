import * as React from 'react';

import Drawer, {DrawerContent, DrawerHeader, DrawerTitle, DrawerSubtitle} from '@material/react-drawer';
import List, {ListItem, ListItemGraphic, ListItemText} from '@material/react-list';
import MaterialIcon from '@material/react-material-icon';

import {MenuContext} from '../Context';

const menus = [{
  text: 'Button',
  icon: 'play_circle_outline',
}, {
  text: 'Card',
  icon: 'video_label',
}, {
  text: 'Checkbox',
  icon: 'check_box',
}, {
  text: 'Radio',
  icon: 'edit_attributes',
}, {
  text: 'Select',
  icon: 'storage',
}];

export const Menu =  () => (
  <MenuContext.Consumer>
  {({isOpen, setOpen, selectedIndex, setSelectedIndex}) => (
    <Drawer
      modal
      open={isOpen}
      onClose={() => setOpen(false)}>
      <DrawerHeader>
        <DrawerTitle tag='h2'>Troy Tae</DrawerTitle>
        <DrawerSubtitle>tjy970721@gmail.com</DrawerSubtitle>
      </DrawerHeader>

      <DrawerContent>
        <List singleSelection selectedIndex={selectedIndex}>
          {menus.map((menu, index) => <ListItem
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              setOpen(false);
            }}>
            <ListItemGraphic graphic={<MaterialIcon icon={menu.icon} />} />
            <ListItemText primaryText={menu.text} />
          </ListItem>)}
        </List>
        </DrawerContent>
      </Drawer>
    )}
  </MenuContext.Consumer>
);
