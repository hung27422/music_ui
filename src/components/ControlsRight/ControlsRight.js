import classNames from 'classnames/bind';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './ControlsRight.module.scss';
import { MVIcon, MicroIcon, MuteIcon, SoundIcon } from '../Icons';
import { useContext, useEffect, useState } from 'react';
import { MusicContext } from '../UseContextMusic/ContextMusic';
const cx = classNames.bind(styles);

function ControlsRight() {
    const { volume, setVolume, muteVolume, setMuteVolume } = useContext(MusicContext);
    const handleVolumeChange = (e) => {
        const newVolume = e.target.value / 100; // Chuyển đổi giá trị range từ 0-100 thành giá trị âm lượng từ 0-1
        setVolume(newVolume);
    };
    const handleMuteVolume = () => {
        setMuteVolume(!muteVolume);
    };
    return (
        <div className={cx('wrapper')}>
            <Tippy content="MV">
                <button className={cx('btn-icon', 'btn-mv')}>
                    <MVIcon />
                </button>
            </Tippy>
            <Tippy content="Xem lời bài hát">
                <button className={cx('btn-icon', 'btn-micro')}>
                    <MicroIcon />
                </button>
            </Tippy>
            <div className={cx('btn-sound')}>
                {!!muteVolume ? (
                    <button className={cx('btn-volume', 'btn-icon')} onClick={handleMuteVolume}>
                        <MuteIcon />
                    </button>   
                ) : (
                    <button className={cx('btn-volume', 'btn-icon')} onClick={handleMuteVolume}>
                        <SoundIcon onClick={handleMuteVolume} />
                    </button>
                )}
                <div className={cx('sound-music')}>
                    <div className={cx('sound-bar')}>
                        <input
                            className={cx('sound-slider')}
                            name="volumeControl"
                            type="range"
                            min="0"
                            max="100"
                            step="1"
                            value={volume * 100}
                            onChange={handleVolumeChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ControlsRight;
