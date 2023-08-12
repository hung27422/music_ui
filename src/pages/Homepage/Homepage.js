import './Homepage.module.scss';
import Header from '../../layouts/components/Header';

import React from 'react';

import classNames from 'classnames/bind';
import styles from './Homepage.module.scss';
import SliderItem from '~/components/SliderItem/SliderItem';
const cx = classNames.bind(styles);
function Homepage() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('content')}>
                <div className={cx('slider')}>
                    <SliderItem/>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
