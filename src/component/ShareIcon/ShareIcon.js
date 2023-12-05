import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faShareSquare } from '@fortawesome/free-regular-svg-icons';

import styles from './ShareIcon.module.scss';
import SocialsShare from './SocialsShare';

const cx = classNames.bind(styles);

function ShareIcon({ value, regular, noBackGround, renderBottom, className }) {
    const renderSocialsShare = (props) => (
        <div className="box" tabIndex="-1" {...props}>
            <SocialsShare />
        </div>
    );

    return (
        <Tippy
            interactive
            delay={[100, 500]}
            placement={renderBottom ? 'bottom-start' : 'top-start'}
            render={renderSocialsShare}
        >
            <div
                className={cx('wrapper', {
                    [className]: className,
                })}
            >
                <div
                    className={cx('icon-container', {
                        'no-back-ground': noBackGround,
                    })}
                >
                    {regular ? (
                        <FontAwesomeIcon className={cx('icon')} icon={faShareSquare} />
                    ) : (
                        <FontAwesomeIcon className={cx('icon')} icon={faShare} />
                    )}
                </div>
                {value && <p className={cx('value')}>{value}</p>}
            </div>
        </Tippy>
    );
}

export default ShareIcon;
