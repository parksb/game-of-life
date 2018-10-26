import * as React from "react";
import * as ReactDOM from "react-dom";
import {Header} from "./header/header";
import {Menu} from "./menu/menu";
import {TopAppBarFixedAdjust} from '@material/react-top-app-bar';


import './reset.scss';
import {BlueButton1} from "./button/blue-button1";

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return [
            <Header/>,
            <TopAppBarFixedAdjust>
                <Menu></Menu>
            </TopAppBarFixedAdjust>
        ];
    }
}

ReactDOM.render(<Main/>, document.getElementById('body'));
