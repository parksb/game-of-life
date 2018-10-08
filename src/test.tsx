import "./style/bootstrap.min.css";
import "./style/custom.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";

const HEIGHT = 37;

class LikeButtonList extends React.Component {
    groups = [{
        name: '쇼핑몰',
        icon: 'fa-store',
        active: false,
        isClick: false,
        menus: [
            { id: 'shop_list', name: '쇼핑몰 목록', link: '/shops' },
            { id: 'shop_states', name: '쇼핑몰 상태', link: '/shop_states' },
            { id: 'typical_images', name: '대표 이미지', link: '/typical_images' },
            { id: 'entry_request_list', name: '입점 신청 관리', link: '/entry_requests' },
            { id: 'shop_request_list', name: '사용자 요청 쇼핑몰', link: '/shop_requests' },
            { id: 'shop_rankings', name: '쇼핑몰 랭킹' },
            { id: 'naver_keyword_count', name: '네이버 검색 수' },
        ],
    }, {
        name: '상품',
        icon: ' fa-tshirt',
        active: false,
        isClick: false,
        menus: [
            { id: 'goods', name: '상품 검색' },
            { id: 'search_goods_category', name: '상품 카테고리 검색' },
            { id: 'goods_tags', name: '상품 태그 관리' },
            { id: 'goods_check_tagging', name: '상품 태깅 확인', link: '/goods/check_tagging' },
            { id: 'keyword_synonyms', name: '검색어 동의어 편집' },
            { id: 'search_goods_suggestions', name: '추천 단어 편집' },
            { id: 'goods_presets', name: '프리셋 관리' },
            { id: 'image_search', name: '이미지 검색', link: '/image_search' },
            { id: 'image_search_test', name: '이미지 검색(테스트버킷)' },
            { id: 'goods_search_monitor', name: '검색 결과 모니터링' },
        ],
    }, {
        name: '사용자',
        icon: 'fa-user',
        active: false,
        isClick: false,
        menus: [
            { id: 'user_list', name: '사용자', link: '/users' },
            { id: 'user_activity_log_group_list', name: '사용자 활동 로그', link: '/user_activity_log_groups' },
            { id: 'zigzag_notices', name: '공지 사항' },
            { id: 'send_push', name: '푸시 보내기' },
        ],
    }, {
        name: '셀러',
        icon: 'fa-user-tie',
        active: false,
        isClick: false,
        menus: [
            { id: 'seller_accounts', name: '셀러 계정 목록' },
            { id: 'seller_notice_list', name: '마케팅센터 공지사항', link: '/seller_notices' },
            { id: 'agency_list', name: '대행사 목록', link: '/agencies' },
            { id: 'send_text_message', name: '메시지 보내기' },
            { id: 'send_email', name: 'Email 보내기' },
            { id: 'shop_events', name: '이벤트' },
            { id: 'shop_event_cb_applications', name: '쿠폰 이벤트 클로즈 베타' },
        ],
    }, {
        name: '통계',
        icon: 'fa-chart-pie',
        active: false,
        isClick: false,
        menus: [
            { id: 'zigzag_metrics_dailies', name: '일간 통계' },
            { id: 'zigzag_metrics_weeklies', name: '주간 통계' },
            { id: 'zigzag_metrics_monthlies', name: '월간 통계' },
            { id: 'zigzag_metrics_hourlies', name: '시간별 통계' },
            { id: 'new_users_count_per_hour', name: '시간별 새 사용자', link: '/statistics/new_users/per_hour' },
            { id: 'new_users_count_per_day', name: '날짜별 새 사용자', link: '/statistics/new_users/per_day' },
            { id: 'today_statistics', name: '오늘', link: '/statistics/per_day/today' },
        ],
    }, {
        name: '광고',
        icon: 'fa-tv',
        active: false,
        isClick: false,
        menus: [
            { id: 'ad_display_dashboard', name: '대시보드', link: '/ad_display/dashboard' },
            { id: 'ad_display_review_contents', name: '소재 검수', link: '/ad_display/contents' },
            { id: 'ad_display_review_content_activities', name: '소재 검수 내역', link: '/ad_display/content-reviews/activities' },
            { id: 'ad_display_shop_payments', name: '쇼핑몰 기간별 소진내역', link: '/ad_display/shop_payments' },
            { id: 'ad_display_shops', name: '쇼핑몰 광고정보', link: '/ad_display/shops' },
            { id: 'ad_display_metrics_dailies', name: '일간 통계', link: '/ad_display/metrics_dailies' },
            { id: 'ad_display_shop_clusters', name: '쇼핑몰 추천 알고리즘', link: '/ad_display/shop_clusters' },
            { id: 'ad_display_spare_content_manager', name: '보너스 소재 관리', link: '/ad_display/spare_content_manager' },
            { id: 'ad_display_global_configuration', name: '광고 설정 관리', link: '/ad_display/global_configuration' },
            { id: 'ad_display_report', name: '광고 보고서 발행', link: '/ad_display/reports' },
        ],
    }, {
        name: '재무/관리',
        icon: 'fa-dollar-sign',
        active: false,
        isClick: false,
        menus: [
            {id: 'shop_charge_daily', name: '일일 쇼핑몰 충전 내역', link: '/payment/shop_charge_daily'},
            {id: 'shop_settlement_list', name: '쇼핑몰 정산 목록', link: '/shop_settlement'},
            {id: 'zigzag_refund_payment', name: '환불 관리', link: '/payment/zigzag_refund_payments'},
            {id: 'shop_tax_invoice_list', name: '쇼핑몰 세금 계산서', link: '/shop_tax_invoices'},
            {id: 'agency_settlement_list', name: '대행사 정산', link: '/agency_settlements'},
            {id: 'agency_settlement_dailies', name: '대행사 일간 정산 내역', link: '/agency_settlement_dailies'},
            {id: 'croquis_accounts', name: '지그재그 관리자'},
        ],
    }];

    clickGroup(group) {
        group.active = !group.active;
        group.isClick = true;
        this.setState({});
    }

    constructor(props) {
        super(props);
    }

    render() {
        const Nav = styled.nav`
            width: 250px;
            padding: 30px;
            background-image: linear-gradient(294deg, #ff3898, #ff4177);
            
            @media (max-width: 1080px) {
                width: 70px;
                padding: 15px;
            }
        `;
        const Group = styled.div`
            position: relative;
            cursor: pointer;
            color: white;
            margin-top: 30px;
            margin-bottom: 15px;
            
            > .fas {
                font-size: 1.3875rem;
                margin-right: 8px;
            }
            
            > .title {
                font-size: 1.0875rem;
                vertical-align: top;
            }
            
            &::after {
                position: absolute;
                top: 50%;
                right: 0;
                transform: translateY(-50%);
                content: '';
                display: block;
                border: 6px solid transparent;
                border-top-color: white;
            }
            
            @media (max-width: 1080px) {
                text-align: center;
                
                > .title {
                    display: none;
                }
                + .menus {
                    display: none;
                }
            }
        `;
        return (
            <Nav>
                {this.groups.map(group => {
                    const height = group.menus.length * HEIGHT;
                    const Menu = styled.div`
                        height: ${group.active ? height : 0}px;
                        margin-left: 5px;
                        overflow: hidden;

                        > .menu {
                            display: block;
                            color: rgba(255, 255, 255, 0.8);
                            height: 22px;
                            font-size: .9375rem;
                            margin-bottom: 15px;
                            transition: color 200ms ease;

                            &.active, &:hover {
                                color: white;
                            }
                        }

                        ${!group.isClick ? '' : `
                            & {
                                animation-name: fade-${group.active ? 'in' : 'out'};
                                animation-duration: ${group.menus.length * 30 + 200}ms;
                            }
                            @keyframes fade-in {
                              from {
                                opacity: 0.0;
                                height: 0px;
                              }
                              to {
                                opacity: 1.0;
                                height: ${height}px;
                              }
                            }

                            @keyframes fade-out {
                              from {
                                opacity: 1.0;
                                height: ${height}px;
                              }
                              to {
                                opacity: 0.0;
                                height: 0px;
                              }
                            }
                        `}
                    `;
                    group.isClick = false;
                    return [
                        <Group onClick={() => this.clickGroup(group)}>
                            <i className={`fas ${group.icon}`}/>
                            <span className="title">{group.name}</span>
                        </Group>,
                        <Menu className={`menus`}>
                            {group.menus.map(menu => {
                                return <a className="menu" href={menu.link || menu.id}>{menu.name}</a>;
                            })}
                        </Menu>
                    ];
                })}
            </Nav>
        );
    }
}

ReactDOM.render(<LikeButtonList/>, document.getElementById('container'));
