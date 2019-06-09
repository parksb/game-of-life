import React from "react";
import {TopAppBarFixedAdjust} from "@material/react-top-app-bar";

import {MenuContext} from "../Context";

import Button from "./button";
import Card from "./card";
import Checkbox from "./checkbox";
import Radio from "./radio";
import Select from "./select";

export const Content = () => (
  <MenuContext.Consumer>
    {({selectedIndex}) => (
      <TopAppBarFixedAdjust>
        {
          selectedIndex === 0 ? <Button /> :
            selectedIndex === 1 ? <Card /> :
              selectedIndex === 2 ? <Checkbox /> :
                selectedIndex === 3 ? <Radio /> :
                  selectedIndex === 4 ? <Select /> : null
        }
      </TopAppBarFixedAdjust>
    )}
  </MenuContext.Consumer>
);
