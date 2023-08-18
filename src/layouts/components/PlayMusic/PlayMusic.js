import classNames from 'classnames/bind';

import styles from './PlayMusic.module.scss';
import MusicItem from '~/components/MusicItem/MusicItem';
import ControlsMid from '~/components/ControlsMid';
import ControlsRight from '~/components/ControlsRight';
const cx = classNames.bind(styles);

function PlayMusic() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('controls-left')}>
                <MusicItem showAction noneHover animation ml26 width />
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
