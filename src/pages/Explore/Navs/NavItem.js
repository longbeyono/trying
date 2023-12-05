import classNames from 'classnames/bind';
import styles from './Navs.module.scss';

const cx = classNames.bind(styles);

function NavItem({ icon, title, className, onClick }) {
    return (
        <div
            className={cx('item', {
                [className]: className,
            })}
            onClick={onClick}
        >
            <span className={cx('icon')}>{icon}</span>
            <p className={cx('title')}>{title}</p>
        </div>
    );
}

export default NavItem;
