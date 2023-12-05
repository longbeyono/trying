import classNames from 'classnames/bind';
import style from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(style);

function SuggestedAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <p className={cx('see-all-btn')}>See all</p>
        </div>
    );
}

export default SuggestedAccounts;
