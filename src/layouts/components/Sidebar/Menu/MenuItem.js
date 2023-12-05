import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';

const cx = classNames.bind(style);

function MenuItem({ title, to, icon, activeIcon }) {
    return (
        //navRes là gtri trả về của NavLink
        <NavLink
            className={(navRes) =>
                cx('menu-item', {
                    active: navRes.isActive,
                })
            }
            to={to}
        >
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{activeIcon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

export default MenuItem;
