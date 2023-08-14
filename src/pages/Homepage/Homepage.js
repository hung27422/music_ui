import './Homepage.module.scss';
import Header from '../../layouts/components/Header';

import React from 'react';

import classNames from 'classnames/bind';
import styles from './Homepage.module.scss';
import SliderItem from '~/components/SliderItem/SliderItem';
import NewRelease from '~/components/NewRelease/NewRelease';
import { NavLink } from 'react-router-dom';
import RapVietPage from '../../components/NewRelease/RapVietPage/RapVietPage';
import Zingchat from '../../components/NewRelease/Zingchat/Zingchat';
const cx = classNames.bind(styles);
function Homepage() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('content')}>
                <div className={cx('slider')}>
                    <SliderItem />
                </div>
                <div className={cx('new-release')}>
                    <NewRelease title="Mới phát hành" />
                </div>
            </div>
        </div>
    );
}

export default Homepage;
