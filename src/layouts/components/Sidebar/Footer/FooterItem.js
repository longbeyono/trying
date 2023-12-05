import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function FooterItem({ children }) {
    return <div className={cx('footer-item')}>{children}</div>;
}

FooterItem.propTypes = {
    children: PropTypes.node.isRequired,
};

export default FooterItem;
