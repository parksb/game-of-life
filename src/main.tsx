import * as React from "react";
import * as ReactDOM from "react-dom";
import {Header} from "./header/header";

import './reset.scss';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return [
            <Header/>
        ];
    }
}

ReactDOM.render(<Main/>, document.getElementById('body'));
