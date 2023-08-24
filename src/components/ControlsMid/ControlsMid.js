import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './ControlsMid.module.scss';
import { NextIcon, PauseIcon, PlayIcon, PrevIcon, RandomIcon, RepeatIcon } from '../Icons/Icons';
import { createRef, useState, forwardRef, useContext, useEffect } from 'react';
import { MusicContext } from '../UseContextMusic/ContextMusic';

const cx = classNames.bind(styles);
function ControlsMid({ data }) {
    const audioRef = createRef();
    //Active repeate và random
    const [activeRD, setActiveRD] = useState(false);
    const [activeRP, setActiveRP] = useState(false);
    //Handle play and pause
    //----
    const { selectPlay } = useContext(MusicContext);
    const { selectButtonPlay } = useContext(MusicContext);
    const [isPlaying, setIsPlaying] = useState(selectButtonPlay);

    // Handle button Random
    const handleRandom = () => {
        setActiveRD(false);
    };
    const handleRandomActive = () => {
        setActiveRD(true);
    };
    //Handle button Repeate
    const handleRepeat = () => {
        setActiveRP(false);
    };
    const handleRepeatActive = () => {
        setActiveRP(true);
    };
    //Handle button Play and Pause
    const handlePlay = () => {
        if (!isPlaying) {
            selectPlay.play();
        } else {
            selectPlay.pause();
        }
        setIsPlaying(!isPlaying);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('item-top')}>
                {/* RandomIcon */}
                <Tippy content="Phát Ngẫu nhiên">
                    {!!activeRD ? (
                        <button className={cx('btn-icon', 'btn-random', 'activeRD')} onClick={handleRandom}>
                            <RandomIcon />
                        </button>
                    ) : (
                        <button className={cx('btn-icon', 'btn-random')} onClick={handleRandomActive}>
                            <RandomIcon />
                        </button>
                    )}
                </Tippy>
                {/* PrevIcon */}
                <button className={cx('btn-icon', 'btn-prev')}>
                    <PrevIcon />
                </button>

                {/* PlayIcon & PauseIcon */}
                {!!isPlaying ? (
                    <button className={cx('btn-icon', 'btn-pause')} onClick={handlePlay}>
                        <PauseIcon />
                    </button>
                ) : (
                    <button className={cx('btn-icon', 'btn-play')} onClick={handlePlay}>
                        <PlayIcon />
                    </button>
                )}
                <audio ref={audioRef} src={data.media}></audio>

                {/* NextIcon */}
                <button className={cx('btn-icon', 'btn-next')}>
                    <NextIcon />
                </button>
                {/* RepeatIcon */}
                <Tippy content="Lặp lại bài hát">
                    {!!activeRP ? (
                        <button className={cx('btn-icon', 'btn-repeat', 'activeRP')} onClick={handleRepeat}>
                            <RepeatIcon />
                        </button>
                    ) : (
                        <button className={cx('btn-icon', 'btn-repeat')} onClick={handleRepeatActive}>
                            <RepeatIcon />
                        </button>
                    )}
                </Tippy>
            </div>
            <div className={cx('duration-music')}>
                <span className={cx('time-left')}>0:00</span>
                <div className={cx('duration-bar')}>
                    <div className={cx('duration-slider')}>
                        <div className={cx('duration-handle')}></div>
                    </div>
                </div>
                <span className={cx('time-right')}>2:33</span>
            </div>
        </div>
    );
}

export default ControlsMid;
