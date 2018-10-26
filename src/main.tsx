import * as React from "react";
import * as ReactDOM from "react-dom";
import {Header} from "./header/header";
import Tab from "@material/react-tab";
import TabBar from "@material/react-tab-bar";
import {TopAppBarFixedAdjust} from '@material/react-top-app-bar';

const styles = require('./main.scss');

import './reset.scss';
import {Bear} from "./bear/bear";
import {ZCoin} from "./z-coin/z-coin";
import {Notifig} from "./notifig/notifig";

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
                { this.state.activeIndex === 0 ? <Bear/> : this.state.activeIndex === 1 ? <ZCoin/> : this.state.activeIndex === 2 ? <Notifig/> : '' }
            </TopAppBarFixedAdjust>
        ];
    }
}

ReactDOM.render(<Main/>, document.getElementById('body'));
