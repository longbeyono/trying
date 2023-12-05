import classNames from 'classnames/bind';

import styles from './Profile.module.scss';
import Header from './Header';
import Body from './Body';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('body')}>
                <Body />
            </div>
        </div>
    );
}

export default Profile;
