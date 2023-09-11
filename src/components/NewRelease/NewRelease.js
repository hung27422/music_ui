import classNames from 'classnames/bind';
import styles from './NewRelease.module.scss';

import RapViet from './RapViet/RapViet';
import MusicLove from './MusicLove/MusicLove';
import { useState, useEffect, useContext } from 'react';
import AllMusic from './AllMusic/AllMusic';
import { MusicContext } from '../UseContextMusic/ContextMusic';
const cx = classNames.bind(styles);
function NewRelease({ title }) {
    const [active, setActive] = useState('1');
    const { selectMusic } = useContext(MusicContext);

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
                    Rap Việt
                </button>
            </div>

            <div className={cx('body')}>
                {active === '1' && (
                    <div className={cx('page-mini')}>
                        <AllMusic data={selectMusic} />
                    </div>
                )}

                {active === '2' && (
                    <div className={cx('page-mini')}>
                        <RapViet />
                    </div>
                )}
            </div>
        </div>
    );
}

export default NewRelease;
