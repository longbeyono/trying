import { useEffect, useRef, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import httpRequest from '~/utils/httpRequest';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import style from './Search.module.scss';
import ItemAcount from '~/component/ItemAcount';
import { useDebounced } from '~/hooks';

const cx = classNames.bind(style);

function Search() {
    const [inputSearch, setInputSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showSearch, setShowSearch] = useState(false);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const debouncedInputSearch = useDebounced(inputSearch, 700);

    useEffect(() => {
        if (!debouncedInputSearch) {
            setSearchResult([]);
            return;
        }
        setLoading(true);

        httpRequest
            .get('/users/search', {
                params: {
                    q: debouncedInputSearch,
                    type: 'less',
                },
            })
            .then((res) => {
                setLoading(false);
                setSearchResult(res.data.data);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [debouncedInputSearch]);

    const handleCloseSearch = () => {
        setInputSearch('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleBlurSearch = () => {
        setShowSearch(false);
    };

    const handleFocusSearch = () => {
        setShowSearch(true);
    };

    const handleChangeInput = (e) => {
        const searchInputvalue = e.target.value;
        if (!searchInputvalue.startsWith(' ')) {
            setInputSearch(searchInputvalue);
        }
    };

    return (
        //Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <Tippy
                interactive
                visible={searchResult.length > 0 && showSearch}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <div className={cx('search-sesult-label')}>Acount</div>
                            <ul className={cx('search-sesult-list')}>
                                {searchResult.map((item) => (
                                    <ItemAcount key={item.id} data={item} />
                                ))}
                            </ul>
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleBlurSearch}
            >
                <div className={cx('search')} onFocus={handleFocusSearch}>
                    <input
                        ref={inputRef}
                        value={inputSearch}
                        className={cx('input')}
                        placeholder="Tìm kiếm"
                        onChange={handleChangeInput}
                    />
                    {!!inputSearch && !loading && (
                        <button className={cx('close')} onClick={handleCloseSearch}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
