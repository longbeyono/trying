import classNames from 'classnames/bind';
import styles from './Discover.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

function DiscoverItem({ data }) {
    return (
        <div className={cx('container')}>
            <Button className={cx('item')} round leftIcon={<FontAwesomeIcon icon={faMusic} />}>
                <p className={cx('content')}>{'Hát mãi khúc quân hành đi khắp thế gian'}</p>
            </Button>
        </div>
    );
}

export default DiscoverItem;
