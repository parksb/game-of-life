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
            <Checkbox
                nativeControlId='my-checkbox'
                checked={true}
                indeterminate={false}
                onChange={(e) => this.setState({
                    checked: e.target.checked,
                    indeterminate: e.target.indeterminate})
                }
            />
        </div>;
    }
}
