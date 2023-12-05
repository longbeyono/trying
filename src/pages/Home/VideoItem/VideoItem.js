import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './VideoItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCommentDots, faMusic } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import Button from '~/component/Button/Button';
import PreviewAccount from '~/component/SuggestedAccounts/PreviewAccount';
import ShareIcon from '~/component/ShareIcon';

const cx = classNames.bind(styles);

function VideoItem() {
    const liked = false;
    return (
        //fix-center để fix cho content của video căn giữa, làm cho border-bottom chỉ nằm trong phần content
        <div className={cx('fix-center')}>
            <div className={cx('wrapper')}>
                <Tippy
                    interactive
                    // visible
                    delay={[1000, 300]}
                    placement="bottom-start"
                    offset={[0, 4]}
                    render={(props) => (
                        <div className="box" tabIndex="-1" {...props}>
                            <PreviewAccount />
                        </div>
                    )}
                >
                    <div className={cx('avatar')}>
                        <img
                            className={cx('image')}
                            alt=""
                            src="https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg"
                        ></img>
                    </div>
                </Tippy>

                <div className={cx('container')}>
                    <div className={cx('info')}>
                        <div className={cx('content')}>
                            <Tippy
                                interactive
                                // visible
                                delay={[1000, 300]}
                                placement="bottom-start"
                                offset={[-64, 34]}
                                render={(props) => (
                                    <div className="box" tabIndex="-1" {...props}>
                                        <PreviewAccount />
                                    </div>
                                )}
                            >
                                <div className={cx('name')}>
                                    <div className={cx('nickname')}>nguyenthanhlong</div>
                                    <div className={cx('check-icon')}>{<FontAwesomeIcon icon={faCheckCircle} />}</div>
                                    <div className={cx('full-name')}>nguyễn thanh long</div>
                                </div>
                            </Tippy>
                            <div className={cx('extra')}>
                                <p className={cx('content-extra')}>Flop quá</p>
                                <strong className={cx('hashtag')}></strong>
                            </div>
                            <strong className={cx('music')}>
                                <FontAwesomeIcon className={cx('music-icon')} icon={faMusic} />
                                <a className={cx('music-content')}>
                                    Einaudi: Experience - Ludovico Einaudi & Daniel Hope & I Virtuosi Italiani
                                </a>
                            </strong>
                        </div>
                        <Button className={cx('follow-btn')} small outline>
                            Follow
                        </Button>
                    </div>
                    <div className={cx('video-container')}>
                        <div className={cx('video')}>
                            <video className={cx('video-src')}></video>
                            <div className={cx('play-pause-btn')}></div>
                            <div className={cx('volume-btn')}></div>
                        </div>
                        <div className={cx('interaction')}>
                            <div
                                className={cx('icon-and-babel', {
                                    active: liked,
                                })}
                            >
                                <div className={cx('icon-container')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
                                </div>
                                <p className={cx('label')}>23.4K</p>
                            </div>
                            <div className={cx('icon-and-babel')}>
                                <div className={cx('icon-container')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faCommentDots} />
                                </div>
                                <p className={cx('label')}>546</p>
                            </div>
                            <ShareIcon className={cx('icon-and-babel')} value={'124'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoItem;
