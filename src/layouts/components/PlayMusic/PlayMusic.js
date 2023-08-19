import classNames from 'classnames/bind';

import styles from './PlayMusic.module.scss';
import MusicItem from '~/components/MusicItem - S/MusicItem';
import ControlsMid from '~/components/ControlsMid';
import ControlsRight from '~/components/ControlsRight';
const cx = classNames.bind(styles);

function PlayMusic() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('controls-left')}>
                <MusicItem showAction noneHover ml26 width size />
            </div>
            <div className={cx('controls-player')}>
                <ControlsMid />
            </div>
            <div className={cx('controls-right')}>
                <ControlsRight />
            </div>
        </div>
    );
}

export default PlayMusic;
