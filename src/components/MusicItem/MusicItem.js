import classNames from 'classnames/bind';

import styles from './MusicItem.module.scss';
const cx = classNames.bind(styles);
function MusicItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_webp/cover/6/d/9/6/6d961b2a82f151a0f9af7de928e8f809.jpg"
                alt="a loi"
            />
            <div className={cx('info')}>
                <span className={cx('music-name')}>À Lôi</span>
                <p className={cx('author')}>Double2T, Masew</p>
            </div>
        </div>
    );
}

export default MusicItem;
