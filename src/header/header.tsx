import * as React from "react";
import TopAppBar from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';

const styles = require('./header.scss');

export class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <TopAppBar
            className={styles.app_bar}
            title='ZigZag'
            actionItems={[
                <MaterialIcon key='item' icon='menu1'/>,
                <MaterialIcon key='item' icon='menu2'/>
            ]}
        />;
    }
}
