import * as React from "react";
import * as ReactDOM from "react-dom";
import TopAppBar from '@material/react-top-app-bar';
import Button from '@material/react-button';
import MaterialIcon from '@material/react-material-icon';
import '@material/react-top-app-bar/index.scss';
import '@material/react-material-icon/index.scss';
import './reset.scss';

const styles = require('./test.scss');

class Test extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return [
            <TopAppBar
                className={styles.app_bar}
                title='Miami, FL'
                navigationIcon={<MaterialIcon
                    icon='menu'
                    onClick={() => console.log('click')}
                />}
                actionItems={[<MaterialIcon key='item' icon='bookmark' />]}
            />,
            <Button id={styles.button}>히히히히히히</Button>
        ];
    }
}

ReactDOM.render(<Test/>, document.getElementById('container'));
