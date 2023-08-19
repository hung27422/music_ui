import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './ControlsMid.module.scss';
import { NextIcon, PauseIcon, PlayIcon, PrevIcon, RandomIcon, RepeatIcon } from '../Icons/Icons';
import { useState } from 'react';

const cx = classNames.bind(styles);
function ControlsMid() {
    const [activeRD, setActiveRD] = useState(false);
    const [activeRP, setActiveRP] = useState(false);
    const [pause, setPause] = useState(false);
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
        setPause(true);
    };
    const handlePause = () => {
        setPause(false);
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
                {!!pause ? (
                    <button className={cx('btn-icon', 'btn-pause')} onClick={handlePause}>
                        <PauseIcon />
                    </button>
                ) : (
                    <button className={cx('btn-icon', 'btn-play')} onClick={handlePlay}>
                        <PlayIcon />
                    </button>
                )}
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
