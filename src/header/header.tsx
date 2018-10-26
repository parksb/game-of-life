import * as React from "react";
import TopAppBar from "@material/react-top-app-bar";
import MaterialIcon from "@material/react-material-icon";
import List, {ListItem, ListItemMeta, ListItemText, ListItemGraphic} from '@material/react-list';
import Drawer, {DrawerHeader, DrawerTitle, DrawerSubtitle, DrawerContent} from '@material/react-drawer';

const styles = require('./header.scss');

export class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    menus = [{
        name: '파워업 광고',
        icon: 'near_me'
    }, {
        name: '전체 성과',
        icon: 'bar_chart'
    }, {
        name: '상품 관리',
        icon: 'assignment'
    }, {
        name: '주문 정보',
        icon: 'shopping_cart'
    }, {
        name: '쇼핑몰 정보 변경',
        icon: 'info'
    }, {
        name: '공지사항',
        icon: 'notifications'
    }];

    state = {
        selectedIndex: 1,
        open: false
    };

    render() {
        return [
            <TopAppBar
                title="ZigZag"
                className={styles.app_bar}
                navigationIcon={<MaterialIcon icon="menu" onClick={() => this.setState({open: true})}/>}
            />,
            <Drawer
                modal
                open={this.state.open}
                onClose={() => this.setState({open: false})}>
                <DrawerHeader> {/*defaults to div*/}
                    <DrawerTitle tag='h1'>100k</DrawerTitle>
                    <DrawerSubtitle>100k.kr</DrawerSubtitle>
                </DrawerHeader>
                <List singleSelection={true} selectedIndex={this.state.selectedIndex}>
                    {this.menus.map(v => <ListItem>
                        <ListItemGraphic graphic={<MaterialIcon icon={v.icon}/>} />
                        <ListItemText primaryText={v.name} />
                    </ListItem>)}
                </List>
                <a href="#"></a>
            </Drawer>,
        ];
    }
}
