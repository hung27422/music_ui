import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import Tippy from '@tippyjs/react';
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

import Popper from '~/components/Popper';
import MusicItem from '~/components/MusicItem';
import { click } from '@testing-library/user-event/dist/click';

const cx = classNames.bind(styles);
function Search() {
    const searchResult = (attrs) => (
        <Popper>
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                <h2 className={cx('title')}>Gợi ý kết quả</h2>
                <div className={cx('body')}>
                    <MusicItem />
                    <div className={cx('action')}>
                       <Tippy interactive content="Thêm vào thư viện" delay={[200,0]}>
                            <span className={cx('act-btn')}>
                                <FontAwesomeIcon icon={faHeartRegular} />
                            </span>
                       </Tippy>
                       <Tippy interactive content="Khác" delay={[200,0]}>
                            <span className={cx('act-btn')}>
                                <FontAwesomeIcon icon={faEllipsis} />
                            </span>
                       </Tippy>
                    </div>
                </div>
            </div>
        </Popper>
    );

    return (
        <TippyHeadless trigger='click' render={searchResult} offset={[0, 0]} interactive>
            <div className={cx('wrapper')}>
                <button className={cx('btn-search')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                <input className={cx('search')} type="text" placeholder="Tìm kiếm bài hát..." />
            </div>
        </TippyHeadless>
    );
}

export default Search;
