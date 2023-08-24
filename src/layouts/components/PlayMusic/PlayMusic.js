import classNames from 'classnames/bind';

import styles from './PlayMusic.module.scss';
import ControlsMid from '~/components/ControlsMid';
import ControlsRight from '~/components/ControlsRight';
import ControlsLeft from '~/components/ControlsLeft/ControlsLeft';
import { MusicContext } from '~/components/UseContextMusic/ContextMusic';
import { useContext } from 'react';
const cx = classNames.bind(styles);

function PlayMusic() {
    const { selectMusic } = useContext(MusicContext);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('controls-left')}>{selectMusic && <ControlsLeft data={selectMusic} />}</div>
            <div className={cx('controls-player')}>{selectMusic && <ControlsMid data={selectMusic} />}</div>
            <div className={cx('controls-right')}>
                <ControlsRight />
            </div>
        </div>
    );
}

export default PlayMusic;
