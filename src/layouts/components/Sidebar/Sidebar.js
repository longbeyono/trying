import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import SuggestedAccounts from '~/component/SuggestedAccounts';
import config from '~/config';
import {
    HomeIcon,
    HomeActiveIcon,
    UsersGroupIcon,
    UsersGroupActiveIcon,
    TelevisionIcon,
    TelevisionActiveIcon,
    ExploreIcon,
    ExploreIconActive,
} from '~/component/Icons';
import Discover from '~/component/Discover/Discover';
import Footer from './Footer/Footer';
import FooterItem from './Footer/FooterItem';

const cx = classNames.bind(style);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title={'For Your'}
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                ></MenuItem>
                <MenuItem
                    title={'Following'}
                    to={config.routes.following}
                    icon={<UsersGroupIcon />}
                    activeIcon={<UsersGroupActiveIcon />}
                ></MenuItem>
                <MenuItem
                    title={'Explore'}
                    to={config.routes.explore}
                    icon={<ExploreIcon />}
                    activeIcon={<ExploreIconActive />}
                ></MenuItem>
                <MenuItem
                    title={'LIVE'}
                    to={config.routes.live}
                    icon={<TelevisionIcon />}
                    activeIcon={<TelevisionActiveIcon />}
                ></MenuItem>
            </Menu>
            <SuggestedAccounts label={'Suggested Accounts'} />
            <SuggestedAccounts label={'Following Accounts'} />
            <Discover />
            <Footer>
                <FooterItem>
                    <span className={cx('item')}>About</span>
                    <span className={cx('item')}>Newsroom</span>
                    <span className={cx('item')}>Contact</span>
                    <span className={cx('item')}>Careers</span>
                    <span className={cx('item')}>ByteDance</span>
                </FooterItem>
                <FooterItem>
                    <span className={cx('item')}>TikTok for Good</span>
                    <span className={cx('item')}>Advertise</span>
                    <span className={cx('item')}>Developers</span>
                    <span className={cx('item')}>Transparency</span>
                    <span className={cx('item')}>TikTok Rewards</span>
                    <span className={cx('item')}>TikTok Embeds</span>
                </FooterItem>
                <FooterItem>
                    <span className={cx('item')}>Help</span>
                    <span className={cx('item')}>Safety</span>
                    <span className={cx('item')}>Terms</span>
                    <span className={cx('item')}>Privacy</span>
                    <span className={cx('item')}>Creator Portal</span>
                    <span className={cx('item')}>Community Guidelines</span>
                </FooterItem>
                <FooterItem>
                    <span className={cx('item')}>© 2023 TikTok</span>
                </FooterItem>
            </Footer>
        </aside>
    );
}

export default Sidebar;
