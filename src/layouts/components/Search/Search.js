import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import { useEffect, useRef, useState } from 'react';

import TippyHeadless from '@tippyjs/react/headless';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import Popper from '~/components/Popper';
import MusicItem from '~/components/MusicItem - S';

const cx = classNames.bind(styles);
function Search() {
    const [value, setValue] = useState('');
    // const [loading, setLoading] = useState(false);
    const ref = useRef();

    const handleValue = (e) => {
        setValue(e.target.value);
    };

    const handleClearValue = () => {
        setValue('');
        ref.current.focus();
    };

    useEffect(() => {});

    //Logic TippyHeadless
    const searchResult = (attrs) => (
        <Popper>
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                <h2 className={cx('title')}>Gợi ý kết quả</h2>
                <div className={cx('body')}>
                    <MusicItem />
                    <MusicItem />
                </div>
            </div>
        </Popper>
    );

    return (
        <TippyHeadless visible={value.length > 0} render={searchResult} offset={[0, 0]} interactive>
            <div className={cx('wrapper')}>
                <button className={cx('btn-search')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                <input
                    ref={ref}
                    value={value}
                    className={cx('search')}
                    type="text"
                    placeholder="Tìm kiếm bài hát..."
                    onChange={handleValue}
                />

                {!!value && (
                    <FontAwesomeIcon
                        className={cx('delete-value')}
                        icon={faClose}
                        onClick={handleClearValue}
                    ></FontAwesomeIcon>
                )}
                {/* {!!loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon>} */}
            </div>
        </TippyHeadless>
    );
}

export default Search;
