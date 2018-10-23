import * as React from "react";
import * as ReactDOM from "react-dom";

const styles = require('./test.scss');

class Test extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button id={styles.test}>히히히히히</button>
        );
    }
}

ReactDOM.render(<Test/>, document.getElementById('container'));
