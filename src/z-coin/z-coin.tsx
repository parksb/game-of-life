import * as React from "react";
import Button from "@material/react-button";

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
                <div id={styles.coin_balance_btn}>
                    <Button>+ 충전하기</Button>
                    <Button>자동충전</Button>
                </div>
                <div id={styles.coin_balance_remaining}>
                    <div className={styles.box}>
                        <span>무상 잔액</span>
                        <span>0원</span>
                    </div>
                    <div className={styles.box}>
                        <span>유상 잔액</span>
                        <span>1,000,000원</span>
                    </div>
                </div>
            </div>,
            <div id={styles.coin_description} className="wrap">
                <h3>Z코인 내역</h3>
                <div id={styles.coin_description_table}>
                    <div className={styles.filter}>
                        <span className={`${styles.button} ${styles.active}`}>소진내역</span>
                        <span className={styles.button}>충전내역</span>
                        <span className={styles.button}>세금계산서</span>
                    </div>
                    <ul className={styles.table}>
                        <li className={styles.header}>
                            <h4>기간</h4>
                            <h4>충전내용</h4>
                            <h4>결제수단</h4>
                            <h4>충전금액(무상)</h4>
                            <h4>충전금액(유상)</h4>
                            <h4>거래내역</h4>
                        </li>
                        <li className={styles.row}>
                            <span>2018.01.30</span>
                            <span>즉시 충전</span>
                            <span>1,000,000원</span>
                            <span>1,000,000원</span>
                            <span>1,000,000원</span>
                            <span>영수증 보기</span>
                        </li>
                        <li className={styles.row}>
                            <span>2018.01.30</span>
                            <span>즉시 충전</span>
                            <span>1,000,000원</span>
                            <span>1,000,000원</span>
                            <span>1,000,000원</span>
                            <span>영수증 보기</span>
                        </li>
                        <li className={styles.row}>
                            <span>2018.01.30</span>
                            <span>즉시 충전</span>
                            <span>1,000,000원</span>
                            <span>1,000,000원</span>
                            <span>1,000,000원</span>
                            <span>영수증 보기</span>
                        </li>
                        <li className={styles.row}>
                            <span>2018.01.30</span>
                            <span>즉시 충전</span>
                            <span>1,000,000원</span>
                            <span>1,000,000원</span>
                            <span>1,000,000원</span>
                            <span>영수증 보기</span>
                        </li>
                    </ul>
                </div>
            </div>
        ];
    }
}
