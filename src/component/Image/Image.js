import { useState } from 'react';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import style from './Image.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(style);

function Image({ className, src, replaceImage = images.avt, ...props }) {
    const [errorImage, setErrorImage] = useState('');

    const handleError = () => {
        setErrorImage(replaceImage);
    };
    return <img className={cx('wrapper', className)} src={errorImage || src} {...props} onError={handleError} />;
}

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    replaceImage: PropTypes.string,
};

export default Image;
