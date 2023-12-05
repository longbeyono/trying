import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import style from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';

const cx = classNames.bind(style);

function Menu({ children, hideOnClick = false, items, onChange }) {
    const [history, setHistory] = useState([{ data: items }]);

    let current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                ></MenuItem>
            );
        });
    };

    const handleBackMenu = () => {
        setHistory((prev) => prev.splice(prev.length - 1, 1));
    };

    const renderMenu = (attrs) => (
        <div className={cx('more-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('wrapper-more')}>
                {history.length > 1 && <HeaderMenu title={current.title} onBack={handleBackMenu} />}
                <div className={cx('menu-body')}> {renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    const handleResetMenuWhenHide = () => setHistory((prew) => prew.slice(0, 1));

    return (
        //Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <Tippy
                interactive
                // visible
                hideOnClick={hideOnClick}
                offset={[20, 8]}
                delay={[0, 700]}
                placement="bottom-end"
                render={renderMenu}
                onHide={handleResetMenuWhenHide}
            >
                {children}
            </Tippy>
        </div>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    hideOnClick: PropTypes.bool,
    items: PropTypes.array,
    onChange: PropTypes.func,
};

export default Menu;
