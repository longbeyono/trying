import classNames from 'classnames/bind';
import styles from './Explore.module.scss';
import Navs from './Navs';
import VideoItem from './VideoItem';

const cx = classNames.bind(styles);

function Explore() {
    return (
        <div className={cx('wrapper')}>
            <Navs />
            <div className={cx('body')}>
                <div className={cx('grid')}>
                    <div className={cx('row')}>
                        <div className={cx('col', 'l-4')}>
                            <VideoItem views={123} />
                        </div>
                        <div className={cx('col', 'l-4')}>
                            <VideoItem views={123} />
                        </div>
                        <div className={cx('col', 'l-4')}>
                            <VideoItem views={123} />
                        </div>
                        <div className={cx('col', 'l-4')}>
                            <VideoItem views={123} />
                        </div>
                        <div className={cx('col', 'l-4')}>
                            <VideoItem views={123} />
                        </div>
                        <div className={cx('col', 'l-4')}>
                            <VideoItem views={123} />
                        </div>
                        <div className={cx('col', 'l-4')}>
                            <VideoItem views={123} />
                        </div>
                        <div className={cx('col', 'l-4')}>
                            <VideoItem views={123} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Explore;
