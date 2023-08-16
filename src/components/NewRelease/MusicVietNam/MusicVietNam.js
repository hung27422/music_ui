import classNames from 'classnames/bind';
import MusicItem from '~/components/MusicItem/MusicItem';
import styles from './MusicVietNam.module.scss'
const cx = classNames.bind(styles)
function MusicVietNam() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('body-left')}>
                <MusicItem></MusicItem>
                <MusicItem></MusicItem>
                <MusicItem></MusicItem>
                <MusicItem></MusicItem>
            </div>
            <div className={cx('body-mid')}>
                <MusicItem></MusicItem>
                <MusicItem></MusicItem>
                <MusicItem></MusicItem>
                <MusicItem></MusicItem>
            </div>
            <div className={cx('body-right')}>
                <MusicItem></MusicItem>
                <MusicItem></MusicItem>
                <MusicItem></MusicItem>
                <MusicItem></MusicItem>
            </div>
        </div>
    );
}

export default MusicVietNam;
