import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './ControlsMid.module.scss';
import { NextIcon, PauseIcon, PlayIcon, PrevIcon, RandomIcon, RepeatIcon } from '../Icons/Icons';
import { useState, useContext, useEffect, useRef } from 'react';
import { MusicContext } from '../UseContextMusic/ContextMusic';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
const cx = classNames.bind(styles);
function ControlsMid({ data }) {
    const clickRef = useRef();
    const seekRef = useRef();
    //Active repeate và random
    const [activeRD, setActiveRD] = useState(false);
    const {
        activeRP,
        setActiveRP,
        selectButtonPlay,
        setSelectButtonPlay,
        isSeek,
        currentTime,
        durationTime,
        refMusic,
        setCurrentSongIndex,
        listSong,
        setClickRefFunc,
        currentSongIndex,
        setSelectMusic,
    } = useContext(MusicContext);

    // Handle button Randomy
    const handleRandom = () => {
        setActiveRD(!activeRD);
    };
    //Handle button Repeate
    const handleRepeat = () => {
        setActiveRP(!activeRP);
        console.log(activeRP);
    };
    //Handle button Play and Pause
    const handlePlay = () => {
        const audio = refMusic.current;
        if (!selectButtonPlay) {
            audio.play();
        } else {
            audio.pause();
        }
        setSelectButtonPlay(!selectButtonPlay);
    };
    //Handle seek
    const handleSeek = (e) => {
        const audio = refMusic.current;
        audio.currentTime = (durationTime / 100) * e.target.value;
        // setPercentage(e.target.value);
    };

    //Next song
    useEffect(() => {
        setClickRefFunc(clickRef.current);
    }, [setClickRefFunc]);

    const handleNextSong = () => {
        let nextCurrentIndex;
        if (activeRD) {
            do {
                nextCurrentIndex = Math.floor(Math.random() * listSong.length) % listSong.length;
            } while (nextCurrentIndex === currentSongIndex);
        } else {
            nextCurrentIndex = (currentSongIndex + 1) % listSong.length;
        }
        setCurrentSongIndex(nextCurrentIndex);
        const nextSong = listSong[nextCurrentIndex];
        setSelectMusic(nextSong);
        setSelectButtonPlay(true); // Set to "playing" state
    };
    // Pre song
    const handlePreviousSong = () => {
        let prevCurrentIndex;
        if (activeRD) {
            do {
                prevCurrentIndex = Math.floor(Math.random() * listSong.length) % listSong.length;
            } while (prevCurrentIndex === currentSongIndex);
        } else {
            prevCurrentIndex = (currentSongIndex - 1 + listSong.length) % listSong.length;
        }
        setCurrentSongIndex(prevCurrentIndex);
        const nextSong = listSong[prevCurrentIndex];
        setSelectMusic(nextSong);
        setSelectButtonPlay(true); // Set to "playing" state
    };
    return (
        <div className={cx('wrapper')}>
            <AudioPlayer data={data} />
            <div className={cx('item-top')}>
                {/* RandomIcon */}
                <Tippy content="Phát Ngẫu nhiên">
                    {!!activeRD ? (
                        <button className={cx('btn-icon', 'btn-random', 'activeRD')} onClick={handleRandom}>
                            <RandomIcon />
                        </button>
                    ) : (
                        <button className={cx('btn-icon', 'btn-random')} onClick={handleRandom}>
                            <RandomIcon />
                        </button>
                    )}
                </Tippy>
                {/* PrevIcon */}
                <button className={cx('btn-icon', 'btn-prev')} onClick={handlePreviousSong}>
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
                {/* NextIcon */}
                <button ref={clickRef} className={cx('btn-icon', 'btn-next')} onClick={handleNextSong}>
                    <NextIcon />
                </button>
                {/* RepeatIcon */}
                <Tippy content="Lặp lại bài hát">
                    {!!activeRP ? (
                        <button className={cx('btn-icon', 'btn-repeat', 'activeRP')} onClick={handleRepeat}>
                            <RepeatIcon />
                        </button>
                    ) : (
                        <button className={cx('btn-icon', 'btn-repeat')} onClick={handleRepeat}>
                            <RepeatIcon />
                        </button>
                    )}
                </Tippy>
            </div>
            <div className={cx('duration-music')}>
                <span className={cx('time-left')}>{formatTime(currentTime)}</span>
                <div className={cx('duration-bar')}>
                    <input
                        ref={seekRef}
                        className={cx('duration-slider')}
                        type="range"
                        min="0"
                        max="100"
                        value={isSeek}
                        step="1"
                        onChange={handleSeek}
                    />
                </div>
                <span className={cx('time-right')}>{data.duration}</span>
            </div>
        </div>
    );
}

export default ControlsMid;
const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};
