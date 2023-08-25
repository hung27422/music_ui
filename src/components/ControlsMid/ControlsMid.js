import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './ControlsMid.module.scss';
import { NextIcon, PauseIcon, PlayIcon, PrevIcon, RandomIcon, RepeatIcon } from '../Icons/Icons';
import { createRef, useState, forwardRef, useContext, useEffect, useRef } from 'react';
import { MusicContext } from '../UseContextMusic/ContextMusic';

const cx = classNames.bind(styles);
function ControlsMid({ data }) {
    const audioRef = useRef();
    const seekRef = useRef();
    //Active repeate và random
    const [activeRD, setActiveRD] = useState(false);
    const [activeRP, setActiveRP] = useState(false);
    //Handle play and pause
    //----
    const { selectPlay } = useContext(MusicContext);
    const { selectButtonPlay, setSelectButtonPlay } = useContext(MusicContext);
    //Handle Seek
    const [durationTime, setDurationTime] = useState(0);
    const { isSeek } = useContext(MusicContext);
    const [currentTimeDown, setCurrentTimeDown] = useState(0);

    useEffect(() => {
        //Hàm đếm từ 0 đến tổng thời gian bài hát
        const interval = setInterval(() => {
            setCurrentTimeDown((prevTime) => {
                if (prevTime < durationTime) {
                    return prevTime + 1;
                }
                clearInterval(interval);
                return prevTime;
            });
        }, 1000); // Mỗi giây tăng thêm 1 giây
        /////
        return () => {
            clearInterval(interval);
        };
    }, [durationTime]);
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
        if (!selectButtonPlay) {
            selectPlay.play();
        } else {
            selectPlay.pause();
        }
        setSelectButtonPlay(!selectButtonPlay);
    };
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
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
                {!!selectButtonPlay ? (
                    <button className={cx('btn-icon', 'btn-pause')} onClick={handlePlay}>
                        <PauseIcon />
                    </button>
                ) : (
                    <button className={cx('btn-icon', 'btn-play')} onClick={handlePlay}>
                        <PlayIcon />
                    </button>
                )}
                <audio
                    ref={audioRef}
                    src={data.media}
                    onLoadedData={(e) => {
                        setDurationTime(e.currentTarget.duration);
                    }}
                ></audio>

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
                <span className={cx('time-left')}>{formatTime(currentTimeDown)}</span>
                <div className={cx('duration-bar')}>
                    <input
                        ref={seekRef}
                        className={cx('duration-slider')}
                        type="range"
                        min="0"
                        max="100"
                        value={isSeek}
                        step="1"
                        // onChange={(e) => handleSeek(e.target.value)}
                        readOnly
                    />
                </div>
                <span className={cx('time-right')}>{data.duration}</span>
            </div>
        </div>
    );
}

export default ControlsMid;
