import classNames from 'classnames/bind';
import styles from './NewRelease.module.scss';

import RapViet from './RapViet/RapViet';
import MusicVietNam from './MusicVietNam/MusicVietNam';
import { useState } from 'react';
import AllMusic from './AllMusic/AllMusic';
const cx = classNames.bind(styles);
function NewRelease({ title }) {
    const [active, setActive] = useState('1');

    const handleActive = (e) => {
        setActive(e.target.id);
    };

    return (
        <div className={cx('wrapper')}>
            <h2>{title}</h2>
            <div className={cx('btn-action')}>
                <button id={'1'} onClick={handleActive} className={cx('btn', active === '1' ? 'active' : '')}>
                    Tất cả
                </button>
                <button id={'2'} onClick={handleActive} className={cx('btn', active === '2' ? 'active' : '')}>
                    Việt Nam
                </button>
                <button id={'3'} onClick={handleActive} className={cx('btn', active === '3' ? 'active' : '')}>
                    Rap Việt
                </button>
            </div>
            <div className={cx('body')}>
                {active === '1' && (
                    <div className={cx('page-mini')}>
                        <AllMusic></AllMusic>
                    </div>
                )}
                {active === '2' && (
                    <div className={cx('page-mini')}>
                        <MusicVietNam></MusicVietNam>
                    </div>
                )}
                {active === '3' && (
                    <div className={cx('page-mini')}>
                        <RapViet></RapViet>
                    </div>
                )}
            </div>
        </div>
    );
}

export default NewRelease;
