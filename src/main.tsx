import * as React from "react";
import * as ReactDOM from "react-dom";
import {Header} from "./header/header";
import {Menu} from "./menu/menu";

import './reset.scss';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return [
            <Header/>,
            <div style={{
                paddingTop: '56px'
            }}>
                <Menu></Menu>
            </div>
        ];
    }
}

ReactDOM.render(<Main/>, document.getElementById('body'));
