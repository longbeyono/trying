import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import style from './SuggestedAccounts.module.scss';
import PreviewAccount from './PreviewAccount/PreviewAccount';

const cx = classNames.bind(style);

function AccountItem() {
    const renderPreviewAccount = (props) => (
        <div className="box" tabIndex="-1" {...props}>
            <PreviewAccount />
        </div>
    );

    return (
        <Tippy interactive offset={[16, 0]} delay={[1000, 200]} placement="bottom" render={renderPreviewAccount}>
            <div className={cx('account-item')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1684929600&x-signature=TzhuEn84hG16KR8Xa5FWwV7S69U%3D"
                    alt=""
                ></img>
                <div className={cx('info-item')}>
                    <div className={cx('user-name')}>
                        <p className={cx('nickname')}>nguyenthanhlong</p>
                        <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                    </div>
                    <p className={cx('full-name')}>Nguyễn Thanh Long</p>
                </div>
            </div>
        </Tippy>
    );
}

export default AccountItem;
