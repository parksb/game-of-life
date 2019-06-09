import React from "react";
import {TopAppBarFixedAdjust} from "@material/react-top-app-bar";

import {MenuContext} from "../Context";
import {ButtonExample} from "./button/ButtonExample";
import {CardExample} from "./card/CardExample";
import {CheckboxExample} from "./checkbox/CheckboxExample";
import {RadioExample} from "./radio/RadioExample";
import {SelectExample} from "./select/SelectExample";

export const Content = () => (
  <MenuContext.Consumer>
    {({selectedIndex}) => (
      <TopAppBarFixedAdjust>
        {(() => {
          switch (selectedIndex) {
            case 0: return <ButtonExample/>;
            case 1: return <CardExample/>;
            case 2: return <CheckboxExample/>;
            case 3: return <RadioExample/>;
            case 4: return <SelectExample/>;
          }
        })()}
      </TopAppBarFixedAdjust>
    )}
  </MenuContext.Consumer>
);
