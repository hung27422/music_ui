import classNames from 'classnames/bind';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

import styles from './MusicItem.module.scss';
import { useState, useContext, useRef, useEffect } from 'react';
import { MusicContext } from '../UseContextMusic/ContextMusic';

const cx = classNames.bind(styles);
function MusicItem({ border, data }) {
    const audioRef = useRef();
    //Hiển thị data phần controls left => Xong ( không đụng tới)
    const { selectMusic, setSelectMusic } = useContext(MusicContext);
    // -------------------------------------------------------------
    //Hiển thị data phần contrls mid
    const { selectButtonPlay, setSelectButtonPlay } = useContext(MusicContext);

    //-- Đưa object audio chứa hàm play() và pause() vào state
    const { selectPlay, setSelectPlay } = useContext(MusicContext);
    const [truePlay, setTruePlay] = useState(false);
    //Handle seek
    const { currentTime, setCurrentTime } = useContext(MusicContext);
    const { durationTime, setDurationTime } = useContext(MusicContext);
    const { isSeek, setIsSeek } = useContext(MusicContext);
    const { percentage, setPercentage } = useContext(MusicContext);
    const { refMusic, setRefMusic } = useContext(MusicContext);

    const handleTimeUpdate = (e) => {
        // setCurrentTime(e.currentTarget.currentTime);
        // const percent = Math.floor((currentTime / durationTime) * 100);
        // setIsSeek(percent);
        const percent = (e.currentTarget.currentTime / e.currentTarget.duration) * 100;
        const time = e.currentTarget.currentTime;
        setPercentage(+percent.toFixed(2));
        setCurrentTime(time.toFixed(2));
        setIsSeek(percentage);
    };
    // onClick
    const handlePlayMusic = () => {
        const audio = {
            play() {
                audioRef.current.play();
            },
            pause() {
                audioRef.current.pause();
            },
        };
        if (!selectButtonPlay) {
            audio.play();
            setTruePlay(true);
        } else {
            audio.pause();
        }
        // setIsPlaying(!isPlaying);
        setSelectPlay(audio);
        setSelectMusic(data);
        setSelectButtonPlay(!selectButtonPlay);
        setRefMusic(audioRef);
    };
    const handleHideIcon = () => {
        setTruePlay(false);
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
                {!!selectButtonPlay && !!truePlay ? (
                    <img
                        className={cx('btn-audio')}
                        src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                        alt="audio"
                        onClick={handlePlayMusic}
                        onBlur={handleHideIcon}
                    />
                ) : (
                    <FontAwesomeIcon
                        className={cx('btn-play')}
                        icon={faPlay}
                        onClick={handlePlayMusic}
                    ></FontAwesomeIcon>
                )}

                <audio
                    ref={audioRef}
                    src={data.media}
                    onLoadedData={(e) => {
                        setDurationTime(e.currentTarget.duration.toFixed(2));
                    }}
                    onTimeUpdate={handleTimeUpdate}
                ></audio>
                <div className={cx('info')}>
                    <span className={cx('music-name')}>{data.title}</span>
                    <div style={{ display: 'flex' }}>
                        <Link className={cx('author')}>{data.artist}</Link>
                        {data.artist2 && <Link className={cx('author')}>, {data.artist2}</Link>}
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
