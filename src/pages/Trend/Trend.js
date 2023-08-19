import classNames from 'classnames/bind';
import styles from './Trend.module.scss';
import './Trend.module.scss';

import images from '~/assets/images/images';
import Header from '~/layouts/components/Header/Header';
import MusicItemL from '~/components/MusicItem - L/MusicItemL';

const cx = classNames.bind(styles);
function Trend() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('body')}>
                <div className={cx('logo-trend')}>
                    <img className={cx('image')} src={images.xuhuong} alt="" />
                </div>
                <div className={cx('list-music')}>
                     <MusicItemL/>  
                     <MusicItemL/>  
                     <MusicItemL/>  
                </div>
            </div>
        </div>
    );
}

export default Trend;
