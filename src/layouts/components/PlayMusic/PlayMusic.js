import classNames from 'classnames/bind';

import styles from './PlayMusic.module.scss'
const cx = classNames.bind(styles)

function PlayMusic() {
    return (
        <div className={cx('wrapper')}>
            <h2>PlayMusic</h2>
        </div>
    );
}

export default PlayMusic;
