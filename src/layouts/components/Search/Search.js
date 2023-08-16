import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import TippyHeadless from '@tippyjs/react/headless';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import Popper from '~/components/Popper';
import MusicItem from '~/components/MusicItem';

const cx = classNames.bind(styles);
function Search() {
    const searchResult = (attrs) => (
        <Popper>
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                <h2 className={cx('title')}>Gợi ý kết quả</h2>
                <div className={cx('body')}>
                    <MusicItem />
                    <MusicItem/>
                </div>
            </div>
        </Popper>
    );

    return (
        <TippyHeadless trigger="click" render={searchResult} offset={[0, 0]} interactive>
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
