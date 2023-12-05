import classNames from 'classnames/bind';

import styles from './ShareIcon.module.scss';

const cx = classNames.bind(styles);

function SocialItem({ icon, label }) {
    return (
        <div className={cx('item')}>
            <div className={cx('icon-social')}>{icon}</div>
            <p className={cx('label-social')}>{label}</p>
        </div>
    );
}

export default SocialItem;
