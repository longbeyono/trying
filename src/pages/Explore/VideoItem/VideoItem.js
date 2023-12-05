import classNames from 'classnames/bind';
import styles from './Videoitem.module.scss';
import { PlayIcon } from '~/component/Icons';

const cx = classNames.bind(styles);

function VideoItem({ views }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('video-item')}>
                <video className={cx('video')}></video>
                <div className={cx('play')}>
                    <div className={cx('icon')}>{<PlayIcon width="2rem" height="2rem" />}</div>
                    <p className={cx('views')}>{views}</p>
                </div>
            </div>
            <div className={cx('desc')}>desc video</div>
        </div>
    );
}

export default VideoItem;
