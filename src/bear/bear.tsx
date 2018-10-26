import * as React from "react";

const styles = require('./bear.scss');

export class Bear extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div id="bear">
            <img id={styles.bear_body} src="https://static.npmjs.com/c9e19250d48d66f0e9c70c9b3991bbdb.png"/>
            <img id="bear_face" src="https://static.npmjs.com/6bf09f9948c3044dbb2c7ed8b85098dc.png"/>
        </div>;
    }
}
