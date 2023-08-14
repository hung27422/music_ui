import classNames from 'classnames/bind';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './SliderItem.module.scss';
import Slider from 'react-slick';

const cx = classNames.bind(styles);
function SliderItem() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <Slider {...settings} className={cx('wrapper')}>
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
        </Slider>
    );
}
export default SliderItem;
