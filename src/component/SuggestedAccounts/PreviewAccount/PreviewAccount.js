import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './PreviewAccount.module.scss';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import Button from '~/component/Button/Button';

const cx = classNames.bind(styles);

function PreviewAccount() {
    return (
        <PopperWrapper className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1684929600&x-signature=TzhuEn84hG16KR8Xa5FWwV7S69U%3D"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <div className={cx('user-name')}>
                    <p className={cx('nickname')}>nguyenthanhlong</p>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </div>
                <p className={cx('full-name')}>Nguyễn Thanh Long</p>
                <p className={cx('follow-like')}>
                    <strong className={cx('values')}>2.6M</strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('values')}>2.6M</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </PopperWrapper>
    );
}

export default PreviewAccount;
