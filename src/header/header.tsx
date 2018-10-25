import * as React from "react";
import TopAppBar from "@material/react-top-app-bar";
import MaterialIcon from "@material/react-material-icon";

const styles = require('./header.scss');

export class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <TopAppBar
            title="ZigZag"
            className={styles.app_bar}
            navigationIcon={<MaterialIcon icon="menu"/>}
        />;
    }
}
