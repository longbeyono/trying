import classNames from 'classnames/bind';
import style from './ItemAcount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/component/Image';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(style);

function ItemAcount({ data }) {
    return (
        <Link to={`@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} placeholder={data.full_name}></Image>
            <div className={cx('body')}>
                <h5 className={cx('name-icon')}>
                    <span className={cx('name')}>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />}
                </h5>
                <p className={cx('user')}>{data.nickname}</p>
            </div>
        </Link>
    );
}

ItemAcount.propTypes = {
    data: PropTypes.object.isRequired,
};

export default ItemAcount;
