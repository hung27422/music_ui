import classNames from 'classnames/bind';
import MusicItem from '~/components/MusicItem - S/MusicItem';
import styles from './MusicLove.module.scss';
const cx = classNames.bind(styles);
function MusicLove() {
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

export default MusicLove;
