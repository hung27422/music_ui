import classNames from 'classnames/bind';
import styles from './MusicItemL.module.scss';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import images from '~/assets/images/images';

const cx = classNames.bind(styles);

function MusicItemL({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('media-left')}>
                <div className={cx('number-order')}>
                    {data.numberorder === 1 && <span className={cx('top1', 'number')}>1</span>}
                    {data.numberorder === 2 && <span className={cx('top2', 'number')}>2</span>}
                    {data.numberorder === 3 && <span className={cx('top3', 'number')}>3</span>}
                    {(data.numberorder !== 1) && (data.numberorder !== 2) && (data.numberorder !== 3) && (
                        <span className={cx('number','no-top')}>{data.numberorder}</span>
                    )}
                </div>
                <span className={cx('sort')}> -- </span>
                <div className={cx('info-music')}>
                    <img className={cx('avatar')} src={data.avatar} alt={data.title} />
                    <div className={cx('info-playlist')}>
                        <p className={cx('name-song')}>{data.title}</p>
                        <div className={cx('info-single')}>
                            <span className={cx('name-single')}>{data.artist}, </span>
                            {data.artist2 && <span className={cx('name-single')}>{data.artist2}</span>}
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('media-mid')}>
                <span className={cx('info-song')}>{data.title} (Single)</span>
            </div>
            <div className={cx('media-right')}>
                <div className={cx('duration-song')}>
                    <span>{data.duration}</span>
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
