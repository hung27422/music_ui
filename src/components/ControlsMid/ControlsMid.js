import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 

import styles from './ControlsMid.module.scss';
import { NextIcon, PlayIcon, PrevIcon, RandomIcon, RepeatIcon } from '../Icons/Icons';

const cx = classNames.bind(styles);
function ControlsMid() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('item-top')}>
               <Tippy content='Phát Ngẫu nhiên'>
                    <button className={cx('btn-icon', 'btn-random')}>
                        <RandomIcon />
                    </button>
               </Tippy>
                <button className={cx('btn-icon', 'btn-prev')}>
                    <PrevIcon />
                </button>
                <button className={cx('btn-icon', 'btn-play')}>
                    <PlayIcon />
                </button>
                <button className={cx('btn-icon', 'btn-next')}>
                    <NextIcon />
                </button>
                <Tippy content='Lặp lại bài hát'>
                    <button className={cx('btn-icon', 'btn-repeat')}>
                        <RepeatIcon />
                    </button>
                </Tippy>
            </div>
            <div className={cx('duration-music')}>
                <span className={cx('time-left')}>0:00</span>
                <div className={cx('duration-bar')}>
                    <div className={cx('duration-slider')}>
                        <div className={cx('duration-handle')}>
                        </div>
                    </div>
                </div>
                <span className={cx('time-right')}>2:33</span>
            </div>
        </div>
    );
}

export default ControlsMid;
