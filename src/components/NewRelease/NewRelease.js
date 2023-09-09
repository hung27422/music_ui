import classNames from 'classnames/bind';
import styles from './NewRelease.module.scss';

import RapViet from './RapViet/RapViet';
import MusicLove from './MusicLove/MusicLove';
import { useState, useEffect } from 'react';
import AllMusic from './AllMusic/AllMusic';
const cx = classNames.bind(styles);
function NewRelease({ title }) {
    const [value, setValue] = useState([]);
    const [active, setActive] = useState('1');
    const [currentSongIndex, setCurrentSongIndex] = useState(null);
    const [listSong, setListSong] = useState([]);
    const [selectMusic, setSelectMusic] = useState(null);

    // Lấy dữ liệu âm nhạc và thiết lập trạng thái ban đầu ở đây
    // useEffect(() => {
    //     fetch('http://localhost:3000/newreleaseall')
    //         .then((response) => response.json())
    //         .then((response) => {
    //             setValue(response);
    //         });
    // }, []);

    // useEffect(() => {
    //     setSelectMusic(value[currentSongIndex]);
    //     setListSong(value);
    // }, [listSong, currentSongIndex, setListSong, setSelectMusic, value]);

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
                        <AllMusic />
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
