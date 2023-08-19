import classNames from 'classnames/bind';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './ControlsRight.module.scss';
import { MVIcon, MicroIcon, SoundIcon } from '../Icons';
const cx = classNames.bind(styles);

function ControlsRight() {
    return (
        <div className={cx('wrapper')}>
            <Tippy content='MV'>
                <button className={cx('btn-icon', 'btn-mv')}>
                    <MVIcon />
                </button>
            </Tippy>
            <Tippy content='Xem lời bài hát'>
                <button className={cx('btn-icon', 'btn-micro')}>
                    <MicroIcon />
                </button>
            </Tippy>
            <div className={cx('btn-icon', 'btn-sound')}>
                <SoundIcon />
                <div className={cx('sound-music')}>
                    <div className={cx('sound-bar')}>
                        <div className={cx('sound-slider')}>
                            <div className={cx('sound-handle')}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ControlsRight;
