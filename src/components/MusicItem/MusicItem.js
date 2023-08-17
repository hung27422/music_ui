import classNames from 'classnames/bind';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

import styles from './MusicItem.module.scss';
const cx = classNames.bind(styles);
function MusicItem({ border, showAction,noneHover,animation,ml26}) {
    
    return (
        <div className={cx('wrapper',{border},{noneHover})}>
            <div className={cx('content')}>
                <div className={cx('figure')}>
                    <img
                        className={cx('avatar',{animation})}
                        src="https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_webp/cover/6/d/9/6/6d961b2a82f151a0f9af7de928e8f809.jpg"
                        alt="a loi"
                    />
                </div>
                <FontAwesomeIcon className={cx('btn-play')} icon={faPlay} />
                <div className={cx('info',{ml26})}>    
                    <span className={cx('music-name')}>À Lôi</span>
                    <Link className={cx('author')}>Double2T, Masew</Link>
                </div>
            </div>
            <div className={cx('action',{showAction})}>
                <Tippy interactive content="Thêm vào thư viện" delay={[200, 0]}>
                    <span className={cx('act-btn')}>
                        <FontAwesomeIcon icon={faHeartRegular} />
                    </span>
                </Tippy>
                <Tippy interactive content="Khác" delay={[200, 0]}>
                    <span className={cx('act-btn')}>
                        <FontAwesomeIcon icon={faEllipsis} />
                    </span>
                </Tippy>
            </div>
        </div>
    );
}

export default MusicItem;
