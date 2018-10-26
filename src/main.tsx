import * as React from "react";
import * as ReactDOM from "react-dom";
import {Header} from "./header/header";
import Tab from "@material/react-tab";
import TabBar from "@material/react-tab-bar";
import {TopAppBarFixedAdjust} from '@material/react-top-app-bar';

const styles = require('./main.scss');

import './reset.scss';

class Main extends React.Component {
    state = {
        activeIndex: 0
    };
    constructor(props) {
        super(props);
    }

    render() {
        return [
            <Header/>,
            <TopAppBarFixedAdjust>
                <TabBar
                    activeIndex={this.state.activeIndex}
                    handleActiveIndexUpdate={(activeIndex) => this.setState({activeIndex})}>
                    <Tab className={styles.tab}>
                        <span className={styles.menu}>광고관리</span>
                    </Tab>
                    <Tab className={styles.tab}>
                        <span className={styles.menu}>Z코인(332,718원)</span>
                    </Tab>
                    <Tab className={styles.tab}>
                        <span className={styles.menu}>알림설정</span>
                    </Tab>
                </TabBar>
                {
                    this.state.activeIndex === 0 ?
                        <div id="bear">
                            <img id={styles.bear_body} src="https://static.npmjs.com/c9e19250d48d66f0e9c70c9b3991bbdb.png"/>
                            <img id="bear_face" src="https://static.npmjs.com/6bf09f9948c3044dbb2c7ed8b85098dc.png"/>
                        </div> :
                    this.state.activeIndex === 1 ?
                        '2222' :
                    this.state.activeIndex === 2 ?
                        '33333' : ''
                }
            </TopAppBarFixedAdjust>
        ];
    }
}

ReactDOM.render(<Main/>, document.getElementById('body'));
