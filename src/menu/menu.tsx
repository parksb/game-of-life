import * as React from "react";
import Tab from "@material/react-tab";
import TabBar from "@material/react-tab-bar";

const styles = require('./menu.scss');

export class Menu extends React.Component {
    state = {
        activeIndex: 0
    };
    
    constructor(props) {
        super(props);
    }

    render() {
        return <TabBar
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
        </TabBar>;
    }
}
