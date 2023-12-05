import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const cx = classNames.bind(style);

function HeaderMenu({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <button onClick={onBack} className={cx('btn-back')}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className={cx('title-header')}>{title}</div>
        </header>
    );
}

HeaderMenu.propTypes = {
    title: PropTypes.string,
    onBack: PropTypes.func,
};

export default HeaderMenu;
