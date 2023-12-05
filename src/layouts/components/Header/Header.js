import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import routes from '~/config/routes';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faLanguage,
    faPlus,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import style from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/component/Button';
import Menu from '~/component/Popper/Menu';
import Image from '~/component/Image';
import Search from '../Search';
import { InfoIcon, MesIcon } from '~/component/Icons';

const cx = classNames.bind(style);

const user = true;

const MENU_LIST = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'languages',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Việt Nam',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Việt Nam',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Việt Nam',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Việt Nam',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Việt Nam',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Việt Nam',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Việt Nam',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Việt Nam',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Việt Nam',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcut',
    },
];

const MENU_USER_LIST = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View Profile',
        to: '/thanhlong37',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coins',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_LIST,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        sparate: true,
    },
];

function Header() {
    const handleMenuChange = (MenuItem) => {
        switch (MenuItem.type) {
            case 'language':
                console.log(MenuItem);
                break;
            default:
        }
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routes.home}>
                    <div className={cx('logo')}>
                        <img src={images.logo}></img>
                    </div>
                </Link>

                <Search />

                <div className={cx('active')}>
                    {user ? (
                        <>
                            <Button square leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <Tippy
                                offset={[0, 8]}
                                interactive
                                // visible
                                delay={[0, 100]}
                                render={(attrs) => (
                                    <div className={cx('hover-btn')} tabIndex="-1" {...attrs}>
                                        <span className={cx('content-hover')}>Message</span>
                                    </div>
                                )}
                            >
                                <button className={cx('btn-user')}>
                                    <MesIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                offset={[0, 8]}
                                interactive
                                // visible
                                delay={[0, 100]}
                                render={(attrs) => (
                                    <div className={cx('hover-btn')} tabIndex="-1" {...attrs}>
                                        <span className={cx('content-hover')}>Inbox</span>
                                    </div>
                                )}
                            >
                                <button className={cx('btn-user', 'btn-user-mes')}>
                                    <InfoIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={user ? MENU_USER_LIST : MENU_LIST} onChange={handleMenuChange}>
                        {user ? (
                            <button className={cx('user-avt')}>
                                <Image
                                    className={cx('user-img')}
                                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f90cc529e5bacc99b1459a81ab73ca87~c5_100x100.jpeg?x-expires=1682949600&x-signature=igsMK7fIzQS%2BQcZN6AgCji3vhZU%3D"
                                    placeholder="Nguyen van A"
                                />
                            </button>
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
