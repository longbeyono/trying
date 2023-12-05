import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Discover.module.scss';
import PropTypes from 'prop-types';

import DiscoverItem from './DiscoverItem';

const cx = classNames.bind(styles);

function Discover() {
    const [discoverResult, setDiscoverResult] = useState([]);

    useEffect(() => {
        fetch('')
            .then((res) => res.json())
            .then((data) => setDiscoverResult(data.data));
    });

    return (
        <div className={cx('wrapper')}>
            {/* {discoverResult.map((item, index) => (
                <DiscoverItem key={item.id} data={item}></DiscoverItem>
            ))} */}
            <DiscoverItem></DiscoverItem>
            <DiscoverItem></DiscoverItem>
            <DiscoverItem></DiscoverItem>
            <DiscoverItem></DiscoverItem>
            <DiscoverItem></DiscoverItem>
            <DiscoverItem></DiscoverItem>
            <DiscoverItem></DiscoverItem>
            <DiscoverItem></DiscoverItem>
            <DiscoverItem></DiscoverItem>
        </div>
    );
}

Discover.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Discover;
