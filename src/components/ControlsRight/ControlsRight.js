import classNames from 'classnames/bind';

import styles from './ControlsRight.module.scss';
import { MVIcon, MicroIcon, SoundIcon } from '../Icons';
const cx = classNames.bind(styles);

function ControlsRight() {
    return (
        <div className={cx('wrapper')}>
            <button className={cx('btn-icon', 'btn-mv')}>
                <MVIcon />
            </button>
            <button className={cx('btn-icon', 'btn-micro')}>
                <MicroIcon />
            </button>
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
