import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import styles from './Body.module.scss';
import config from '~/config';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { PlayIcon } from '~/component/Icons';

const cx = classNames.bind(styles);

function Body() {
    const [showNav, setShowNav] = useState('videos-nav');

    return (
        <div className={cx('wrapper')}>
            <div className={cx('navs')}>
                <p
                    className={cx('nav', {
                        active: showNav === 'videos-nav',
                    })}
                    onClick={() => setShowNav('videos-nav')}
                >
                    Videos
                </p>
                <p
                    className={cx('nav', {
                        active: showNav === 'favorites-nav',
                    })}
                    onClick={() => setShowNav('favorites-nav')}
                >
                    Favorites
                </p>
                <p
                    className={cx('nav', {
                        active: showNav === 'liked-nav',
                    })}
                    onClick={() => setShowNav('liked-nav')}
                >
                    Liked
                </p>
            </div>
            <div className={cx('grid')}>
                <div className={cx('videos', 'row')}>
                    <div className={cx('col', 'c-6', 'm-4', 'l-3')}>
                        <div className={cx('video')}>
                            <video className={cx('video-url')}></video>
                            <div className={cx('extra')}>
                                <PlayIcon height="2.2rem" width="2.2rem" />
                                <p className={cx('views')}>345</p>
                            </div>
                        </div>
                        <div className={cx('content')}>
                            <strong className={cx('hashtag')}>#Cupcut</strong>
                            <p className={cx('label')}>ế quá mà nè</p>
                        </div>
                    </div>
                    <div className={cx('col', 'c-6', 'm-4', 'l-3')}>
                        <div className={cx('video')}>
                            <video className={cx('video-url')}></video>
                            <div className={cx('extra')}>
                                <PlayIcon height="2.2rem" width="2.2rem" />
                                <p className={cx('views')}>345</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col', 'c-6', 'm-4', 'l-3')}>
                        <div className={cx('video')}>
                            <video className={cx('video-url')}></video>
                            <div className={cx('extra')}>
                                <PlayIcon height="2.2rem" width="2.2rem" />
                                <p className={cx('views')}>345</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col', 'c-6', 'm-4', 'l-3')}>
                        <div className={cx('video')}>
                            <video className={cx('video-url')}></video>
                            <div className={cx('extra')}>
                                <PlayIcon height="2.2rem" width="2.2rem" />
                                <p className={cx('views')}>345</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col', 'c-6', 'm-4', 'l-3')}>
                        <div className={cx('video')}>
                            <video className={cx('video-url')}></video>
                            <div className={cx('extra')}>
                                <PlayIcon height="2.2rem" width="2.2rem" />
                                <p className={cx('views')}>345</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col', 'c-6', 'm-4', 'l-3')}>
                        <div className={cx('video')}>
                            <video className={cx('video-url')}></video>
                            <div className={cx('extra')}>
                                <PlayIcon height="2.2rem" width="2.2rem" />
                                <p className={cx('views')}>345</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col', 'c-6', 'm-4', 'l-3')}>
                        <div className={cx('video')}>
                            <video className={cx('video-url')}></video>
                            <div className={cx('extra')}>
                                <PlayIcon height="2.2rem" width="2.2rem" />
                                <p className={cx('views')}>345</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;
