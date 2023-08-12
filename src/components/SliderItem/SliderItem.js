import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import styles from './SliderItem.module.scss';
import { Carousel } from '@trendyol-js/react-carousel';
const cx = classNames.bind(styles);
function SliderItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('slider-item')}>
                <img src="https://photo-zmp3.zmdcdn.me/banner/5/0/c/7/50c703752effbed16aa7ecf90dc43021.jpg" alt="" />
            </div>
            <div className={cx('slider-item')}>
                <img src="https://photo-zmp3.zmdcdn.me/banner/6/b/6/6/6b661cb43820c0e5e2b2bf666c9dc43e.jpg" alt="" />
            </div>
            <div className={cx('slider-item')}>
                <img src="https://photo-zmp3.zmdcdn.me/banner/c/f/9/8/cf98fccd25ef7cc70dc65abf1a305858.jpg" alt="" />
            </div>
            <div className={cx('slider-item')}>
                <img src="https://photo-zmp3.zmdcdn.me/banner/c/f/9/8/cf98fccd25ef7cc70dc65abf1a305858.jpg" alt="" />
            </div>
            <div className={cx('slider-item')}>
                <img src="https://photo-zmp3.zmdcdn.me/banner/c/f/9/8/cf98fccd25ef7cc70dc65abf1a305858.jpg" alt="" />
            </div>
            <div className={cx('slider-item')}>
                <img src="https://photo-zmp3.zmdcdn.me/banner/c/f/9/8/cf98fccd25ef7cc70dc65abf1a305858.jpg" alt="" />
            </div>
        </div>
        
    );
}
export default SliderItem;
