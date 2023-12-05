import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(style);

function MenuItem({ data, onClick }) {
    let Comp = 'div';

    const props = { onClick };

    if (data.to) {
        Comp = Link;
        props.to = data.to;
    }

    const classes = cx('item', {
        sparate: data.sparate,
    });

    return (
        <Comp className={classes} {...props}>
            <span className={cx('icon')}>{data.icon}</span>
            <span className={cx('title')}>{data.title}</span>
        </Comp>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func,
};

export default MenuItem;
