import classNames from 'classnames/bind';
import styles from './Live.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Live() {
    const [showNav, setShowNav] = useState('For You');

    return (
        <div className={cx('wrapper')}>
            <div className={cx('navs-container')}>
                <div className={cx('navs')}>
                    <div className={cx('knows')}>
                        <div
                            className={cx('know', {
                                'active-know': showNav === 'For You',
                            })}
                        ></div>
                        <div
                            className={cx('know', {
                                'active-know': showNav === 'Following',
                            })}
                        ></div>
                    </div>
                </div>

                <div className={cx('chooses')}>
                    <div
                        className={cx('choose', {
                            'active-choose': showNav === 'For You',
                        })}
                        onClick={() => setShowNav('For You')}
                    >
                        For You
                    </div>
                    <div
                        className={cx('choose', {
                            'active-choose': showNav === 'Following',
                        })}
                        onClick={() => setShowNav('Following')}
                    >
                        Following
                    </div>
                </div>
            </div>
            <div className={cx('body')}></div>
        </div>
    );
}

export default Live;
