import classNames from 'classnames/bind';
import styles from './MusicItemL.module.scss';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import images from '~/assets/images/images';

const cx = classNames.bind(styles);

function MusicItemL() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('media-left')}>
                <div className={cx('number-order')}>
                    <span className={cx('number')}>1</span>
                </div>
                <span className={cx('sort')}> -- </span>
                <div className={cx('info-music')}>
                    <img
                        className={cx('avatar')}
                        src="https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_webp/cover/a/5/1/e/a51eccf0d34d67155eb9ba4989ac5861.jpg"
                        alt=""
                    />
                    <div className={cx('info-playlist')}>
                        <p className={cx('name-song')}>Ngõ Chạm</p>
                        <div className={cx('info-single')}>
                            <span className={cx('name-single')}>Emily, </span>
                            <span className={cx('name-single')}>BigDaddy</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('media-mid')}>
                <span className={cx('info-song')}>Ngõ Chạm (Single)</span>
            </div>
            <div className={cx('media-right')}>
                <div className={cx('duration-song')}>
                    <span>4:01</span>
                </div>
                <div className={cx('action')}>
                    <Tippy content="Xem lời bài hát">
                        <div className={cx('action-item')}>
                            <FontAwesomeIcon className={cx('btn-action')} icon={faMicrophone} />
                        </div>
                    </Tippy>
                    <Tippy content="Thêm vào thư viện">
                        <div className={cx('action-item')}>
                            <FontAwesomeIcon className={cx('btn-action')} icon={faHeart} />
                        </div>
                    </Tippy>
                    <Tippy content="Khác">
                        <div className={cx('action-item')}>
                            <FontAwesomeIcon className={cx('btn-action')} icon={faEllipsis} />
                        </div>
                    </Tippy>
                </div>
            </div>
        </div>
    );
}

export default MusicItemL;
