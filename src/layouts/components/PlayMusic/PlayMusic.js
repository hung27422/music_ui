import classNames from 'classnames/bind';

import styles from './PlayMusic.module.scss';
import ControlsMid from '~/components/ControlsMid';
import ControlsRight from '~/components/ControlsRight';
import ControlsLeft from '~/components/ControlsLeft/ControlsLeft';
import { MusicContext } from '~/App';
import { useContext } from 'react';
const cx = classNames.bind(styles);

function PlayMusic() {
    const { selectMusic } = useContext(MusicContext);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('controls-left')}>{selectMusic && <ControlsLeft data={selectMusic} />}</div>
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
