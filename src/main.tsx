import * as React from "react";
import * as ReactDOM from "react-dom";
import {Header} from "./header/header";
import {Menu} from "./menu/menu";
import {TopAppBarFixedAdjust} from '@material/react-top-app-bar';

const styles = require('./error.scss');

import './reset.scss';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return [
            <Header/>,
            <TopAppBarFixedAdjust>
                <Menu></Menu>
                <div id="bear">
                    <img id={styles.bear_body} src="https://static.npmjs.com/c9e19250d48d66f0e9c70c9b3991bbdb.png"/>
                    <img id="bear_face" src="https://static.npmjs.com/6bf09f9948c3044dbb2c7ed8b85098dc.png"/>
                </div>
            </TopAppBarFixedAdjust>
        ];
    }
}

ReactDOM.render(<Main/>, document.getElementById('body'));
