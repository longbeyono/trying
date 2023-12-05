import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Footer({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

Footer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Footer;
