import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import VideoItem from './VideoItem';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('home')}>
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
        </div>
    );
}

export default Home;
