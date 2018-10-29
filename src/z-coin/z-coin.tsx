import * as React from "react";

const styles = require('./z-coin.scss');

export class ZCoin extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return [
            <div id={styles.coin_balance} className="wrap">
                <h5>Z코인 잔액</h5>
                <h6>1,000,000원</h6>
            </div>,
            <div id={styles.coin_description} className="wrap">??</div>
        ];
    }
}
