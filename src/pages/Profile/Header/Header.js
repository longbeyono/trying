import classNames from 'classnames/bind';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Header.module.scss';
import ShareIcon from '~/component/ShareIcon/ShareIcon';
import Button from '~/component/Button';
import Image from '~/component/Image';

const cx = classNames.bind(styles);

function Header({ desc = 'No bio yet' }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('info')}>
                    <img
                        alt=""
                        className={cx('avatar')}
                        src="https://scontent.fdad8-1.fna.fbcdn.net/v/t39.30808-6/349302632_268047398953417_8286845767331912582_n.jpg?stp=dst-jpg_p843x403&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=4lI0Ea31vq0AX9wd5fd&_nc_ht=scontent.fdad8-1.fna&oh=00_AfAwiOjcr9os9yDxiEce7NwdN2u94jJAUaFh3vmWm5Kv9Q&oe=647626F5"
                    ></img>
                    <div className={cx('name')}>
                        <h4 className={cx('nickname')}>nguyenthanhlong</h4>
                        <p className={cx('full-name')}>Thanh Long</p>
                        <Button square leftIcon={<FontAwesomeIcon icon={faPenToSquare} />}>
                            Edit Profile
                        </Button>
                    </div>
                </div>
                <div className={cx('follow')}>
                    <strong className={cx('value')}>92</strong>
                    <p className={cx('label')}>Following</p>
                    <strong className={cx('value')}>46</strong>
                    <p className={cx('label')}>Followers</p>
                    <strong className={cx('value')}>104</strong>
                    <p className={cx('label')}>likes</p>
                </div>
                <p className={cx('desc')}>{desc}</p>
            </div>
            <ShareIcon className={cx('share')} regular noBackGround renderBottom />
        </div>
    );
}

export default Header;
