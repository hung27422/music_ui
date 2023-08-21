import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import { useEffect, useRef, useState } from 'react';

import TippyHeadless from '@tippyjs/react/headless';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import Popper from '~/components/Popper';
import MusicItem from '~/components/MusicItem - S';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);
function Search() {
    const [value, setValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [searchResult, setSearchResult] = useState([]);
    const refInput = useRef();

    const debounceValue = useDebounce(value, 500);

    const handleValue = (e) => {
        const value = e.target.value;
        if (!value.startsWith(' ')) {
            setValue(value);
        }
    };

    const handleClearValue = () => {
        setValue('');
        refInput.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    useEffect(() => {
        if (!debounceValue) {
            return;
        }
        fetch(`http://localhost:3000/song?title=${debounceValue}`)
            .then((response) => response.json())
            .then((response) => {
                setSearchResult(response);
            });
    }, [debounceValue]);

    //Logic TippyHeadless
    const searchResultTippy = (attrs) => (
        <Popper>
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                <h2 className={cx('title')}>Gợi ý kết quả</h2>
                <div className={cx('body')}>
                    {searchResult.map((result) => {
                        return <MusicItem key={result.id} data={result} />;
                    })}
                </div>
            </div>
        </Popper>
    );
    return (
        <TippyHeadless
            visible={showResult && searchResult.length > 0}
            render={searchResultTippy}
            offset={[0, 0]}
            onClickOutside={handleHideResult}
            interactive
        >
            <div className={cx('wrapper')}>
                <button className={cx('btn-search')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                <input
                    ref={refInput}
                    value={value}
                    className={cx('search')}
                    type="text"
                    spellCheck={false}
                    placeholder="Tìm kiếm bài hát..."
                    onChange={handleValue}
                    onFocus={() => setShowResult(true)}
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
