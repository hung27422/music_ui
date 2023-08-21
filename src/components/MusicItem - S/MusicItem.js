import classNames from 'classnames/bind';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

import styles from './MusicItem.module.scss';
const cx = classNames.bind(styles);
function MusicItem({ border, showAction, noneHover, size, ml26, width, data }) {
    if (data === undefined) {
        return <>....</>;
    }
    return (
        <div className={cx('wrapper', { border }, { noneHover }, { width })}>
            <div className={cx('content')}>
                <div className={cx('figure')}>
                    <img className={cx('avatar', { size })} src={data.avatar} alt="a loi" />
                </div>
                <FontAwesomeIcon className={cx('btn-play')} icon={faPlay} />
                <div className={cx('info', { ml26 })}>
                    <span className={cx('music-name')}>{data.title}</span>
                    <div style={{ display: 'flex' }}>
                        <Link className={cx('author')}>{data.artist}</Link>
                        {data.artist2 && <Link className={cx('author')}>{data.artist2}</Link>}
                    </div>
                </div>
            </div>

            <div className={cx('action', { showAction })}>
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
