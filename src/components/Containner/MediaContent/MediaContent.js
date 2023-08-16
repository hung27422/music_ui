import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './MediaContent.module.scss';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faEllipsis, faPlay } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);
function MediaContent() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <div className={cx('img-hover')}>
                    <div className={cx('size-image')}>
                        <div
                            className={cx('avatar')}
                            style={{
                                backgroundImage: `url('https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/0/0/d/900d29d81f4ab570c451fec9ae384f55.jpg')`,
                            }}
                        ></div>
                    </div>
                    <div className={cx('action')}>
                        <button className={cx('btn-heart', 'btn-icon')}>
                            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                        </button>
                        <button className={cx('btn-play', 'btn-icon')}>
                            <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
                        </button>
                        <button className={cx('btn-menu', 'btn-icon')}>
                            <FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon>
                        </button>
                    </div>
                </div>
                <div className={cx('description')}>
                    <span>Thư giãn với những âm thanh</span>
                    <span>Lofi thân thuộc</span>
                </div>
            </div>
        </div>
    );
}

export default MediaContent;
