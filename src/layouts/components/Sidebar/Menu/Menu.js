import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';

const cx = classNames.bind(style);

function Menu({ children }) {
    return <nav className={cx('menu')}>{children}</nav>;
}

Menu.propTyoes = {
    children: PropTypes.node.isRequired,
};

export default Menu;
