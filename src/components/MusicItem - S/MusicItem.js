import classNames from 'classnames/bind';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

import styles from './MusicItem.module.scss';
import { useContext, useEffect, useRef, useState } from 'react';
import { MusicContext } from '../UseContextMusic/ContextMusic';

const cx = classNames.bind(styles);
function MusicItem({ border, data, crIndex }) {
    const {
        selectMusic,
        setSelectMusic,
        selectButtonPlay,
        setSelectButtonPlay,
        setCurrentSongIndex,
        refMusic,
        listSong,
    } = useContext(MusicContext);

    useEffect(() => {
        const audio = refMusic?.current;
        if (audio) {
            audio.addEventListener('loadeddata', () => {
                // Dữ liệu âm thanh đã sẵn sàng, bạn có thể phát ngay lúc này
                if (selectButtonPlay && data.id === selectMusic?.id) {
                    audio.play();
                }
            });
        }
    }, [selectButtonPlay, selectMusic, data, refMusic]);

    const handlePlayMusic = () => {
        const audio = refMusic.current;
        if (!data && !selectMusic) {
            return;
        }
        const isCurrentlyPlaying = selectButtonPlay && data.id === selectMusic.id;
        if (isCurrentlyPlaying) {
            audio.pause();
            setSelectButtonPlay(false);
        } else {
            // Stop all other audio tracks and play the selected one
            const allAudioElements = document.getElementsByTagName('audio');
            for (let i = 0; i < allAudioElements.length; i++) {
                allAudioElements[i].pause();
            }
            audio.play();
            setSelectButtonPlay(true);
        }
        const currentIndex = listSong.findIndex((song) => song.id === data.id);
        setCurrentSongIndex(currentIndex);
        setSelectMusic(data);
    };

    if (data === undefined) {
        return <>....</>;
    }
    return (
        <div className={cx('wrapper', { border })}>
            <div className={cx('content')}>
                <div className={cx('figure')}>
                    <img className={cx('avatar')} src={data.avatar} alt={data.title} />
                </div>
                {!!selectButtonPlay && data.id === selectMusic?.id ? (
                    <img
                        className={cx('btn-audio')}
                        src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                        alt="audio"
                        onClick={handlePlayMusic}
                    />
                ) : (
                    <FontAwesomeIcon
                        className={cx('btn-play')}
                        icon={faPlay}
                        onClick={handlePlayMusic}
                    ></FontAwesomeIcon>
                )}
                <div className={cx('info')}>
                    <span className={cx('music-name')}>{data.title}</span>
                    <div style={{ display: 'flex' }}>
                        {data.artist1 && <Link className={cx('author')}>{data.artist1}</Link>}
                        {data.artist2 && <Link className={cx('author')}>{data.artist2}</Link>}
                        {data.artist3 && <Link className={cx('author')}>{data.artist3}</Link>}
                    </div>
                </div>
            </div>

            <div className={cx('action')}>
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
