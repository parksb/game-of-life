import * as React from "react";
import Checkbox from '@material/react-checkbox';

const styles = require('./notifig.scss');

export class Notifig extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div id={styles.notice_config} className="wrap">
            <h3>광고 알림 메시지 수신 설정</h3>
            <p>광고운영 및 검수와 관련된 메시지 수신 여부를 설정합니다.</p>
            <h4>광고운영 알림 메시지</h4>
            <label className={styles.checkbox}>
                <Checkbox
                    className="checkbox"
                    nativeControlId='my-checkbox'
                    checked={true}
                    indeterminate={false}
                    onChange={(e) => this.setState({
                        checked: e.target.checked,
                        indeterminate: e.target.indeterminate})
                    }
                />
                <span>광고 승인/노출시작 메시지 수신하기</span>
            </label>
            <label className={styles.checkbox}>
                <Checkbox
                    className="checkbox"
                    nativeControlId='my-checkbox'
                    checked={true}
                    indeterminate={false}
                    onChange={(e) => this.setState({
                        checked: e.target.checked,
                        indeterminate: e.target.indeterminate})
                    }
                />
                <span>일시중지/광고종료 메시지 수신하기</span>
            </label>
            <label className={styles.checkbox}>
                <Checkbox
                    className="checkbox"
                    nativeControlId='my-checkbox'
                    checked={true}
                    indeterminate={false}
                    onChange={(e) => this.setState({
                        checked: e.target.checked,
                        indeterminate: e.target.indeterminate})
                    }
                />
                <span>검수 보류 메시지 수신하기</span>
            </label>
            <h4>광고비 알림 메시지</h4>
            <label className={styles.checkbox}>
                <Checkbox
                    className="checkbox"
                    nativeControlId='my-checkbox'
                    checked={true}
                    indeterminate={false}
                    onChange={(e) => this.setState({
                        checked: e.target.checked,
                        indeterminate: e.target.indeterminate})
                    }
                />
                <span>Z코인 일정 잔액 도달 시 알림 메시지 수신하기</span>
            </label>
            <label className={styles.checkbox}>
                <Checkbox
                    className="checkbox"
                    nativeControlId='my-checkbox'
                    checked={true}
                    indeterminate={false}
                    onChange={(e) => this.setState({
                        checked: e.target.checked,
                        indeterminate: e.target.indeterminate})
                    }
                />
                <span>자동충전 실패 메시지 수신하기</span>
            </label>
        </div>;
    }
}
