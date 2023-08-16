import classNames from 'classnames/bind';

import styles from './AllMusic.module.scss';
import MusicItem from '~/components/MusicItem/MusicItem';
const cx = classNames.bind(styles);
function AllMusic() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('body-left')}>
                <MusicItem border></MusicItem>
                <MusicItem border></MusicItem>
                <MusicItem border></MusicItem>
                <MusicItem border></MusicItem>
            </div>
            <div className={cx('body-mid')}>
                <MusicItem border></MusicItem>
                <MusicItem border></MusicItem>
                <MusicItem border></MusicItem>
                <MusicItem border></MusicItem>
            </div>
            <div className={cx('body-right')}>
                <MusicItem border></MusicItem>
                <MusicItem border></MusicItem>
                <MusicItem border></MusicItem>
                <MusicItem border></MusicItem>
            </div>
        </div>
    );
}

export default AllMusic;
