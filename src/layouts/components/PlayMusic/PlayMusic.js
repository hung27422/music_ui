import classNames from 'classnames/bind';

import styles from './PlayMusic.module.scss';
import MusicItem from '~/components/MusicItem/MusicItem';
const cx = classNames.bind(styles);

function PlayMusic() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('controls-left')}>
                <MusicItem showAction noneHover animation ml4/>
            </div>
            <div className={cx('controls-player')}>Mid</div>
            <div className={cx('controls-right')}>Right</div>
        </div>
    );
}

export default PlayMusic;
