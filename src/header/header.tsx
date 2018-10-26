import * as React from "react";
import TopAppBar from "@material/react-top-app-bar";
import MaterialIcon from "@material/react-material-icon";
import MenuSurface, {Corner} from '@material/react-menu-surface';

const styles = require('./header.scss');

export class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    menus = [
        '파워업 광고',
        '전체 성과',
        '상품 관리',
        '주문 정보',
        '쇼핑몰 정보 변경',
        '공지사항'
    ];

    state = {
        open: false
    };

    render() {
        return [
            <TopAppBar
                title="ZigZag"
                className={styles.app_bar}
                navigationIcon={<MaterialIcon icon="menu" onClick={() => this.setState({open: true})}/>}
            ></TopAppBar>,
            <MenuSurface
                id={styles.menus}
                open={this.state.open}
                anchorCorner={Corner.BOTTOM_LEFT}
                onClose={() => this.setState({open: false})}>
                <ul className="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical">
                    {this.menus.map(name => (
                        <li className="mdc-list-item" role="menuitem">
                            <span className="mdc-list-item__text">{name}</span>
                        </li>
                    ))}
                </ul>
            </MenuSurface>
        ];
    }
}
