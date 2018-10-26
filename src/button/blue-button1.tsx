import * as React from "react";
import Button from '@material/react-button';

const styles = require('./blue-button1.scss');

export class BlueButton1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            children
        } = this.props;
        return <Button className={styles.blue_button1}>{children}</Button>
    }
}
