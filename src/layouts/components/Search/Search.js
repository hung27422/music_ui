import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import { useEffect, useRef, useState } from 'react';

import TippyHeadless from '@tippyjs/react/headless';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import Popper from '~/components/Popper';
import MusicItem from '~/components/MusicItem - S';
import request from '~/untils/request';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);
function Search() {
    const [value, setValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [searchResult, setSearchResult] = useState([]);
    const [selectedMusic, setSelectedMusic] = useState(null);
    const refInput = useRef();
    //--Truyền currentSongIndex
    const [currentSongIndex, setCurrentSongIndex] = useState(0);

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

    const handleMusicSelect = (musicData) => {
        setSelectedMusic(musicData);
    };

    useEffect(() => {
        if (!debounceValue) {
            return;
        }
        request
            .get('song', {
                params: {
                    title: debounceValue,
                },
            })
            .then((response) => {
                setSearchResult(response.data);
            });
    }, [debounceValue]);

    //Logic TippyHeadless.data
    const searchResultTippy = (attrs) => (
        <Popper>
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                <h2 className={cx('title')}>Kết quả tìm kiếm</h2>
                <div className={cx('body')}>
                    {searchResult.map((result, index) => {
                        return <MusicItem key={result.id} data={result} onSelect={handleMusicSelect} />;
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
            </div>
        </TippyHeadless>
    );
}

export default Search;
