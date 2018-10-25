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
                <span className={styles.menu}>Menu1</span>
            </Tab>
            <Tab className={styles.tab}>
                <span className={styles.menu}>Menu2</span>
            </Tab>
            <Tab className={styles.tab}>
                <span className={styles.menu}>Menu3</span>
            </Tab>
            <Tab className={styles.tab}>
                <span className={styles.menu}>Menu4</span>
            </Tab>
            <Tab className={styles.tab}>
                <span className={styles.menu}>Menu5</span>
            </Tab>
        </TabBar>;
    }
}
