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
import { click } from '@testing-library/user-event/dist/click';

const cx = classNames.bind(styles);
function MusicItem({ border, data, crIndex }) {
    const audioRef = useRef(null);
    const clickRef = useRef(null);
    //Hiển thị data phần controls left => Xong ( không đụng tới)
    const { selectMusic, setSelectMusic } = useContext(MusicContext);
    // -------------------------------------------------------------
    //Hiển thị data phần contrls mid để dừng và chạy cùng đúng item
    const { selectButtonPlay, setSelectButtonPlay } = useContext(MusicContext);

    //-- Đưa object audio chứa hàm play() và pause() vào state
    const { setSelectPlay } = useContext(MusicContext);
    const [truePlay, setTruePlay] = useState(false);
    //-------------------------------------------Handle seek------------------------------------------------------
    //--Truyền currentTime của audio tới ControlsMid
    const { currentTime, setCurrentTime } = useContext(MusicContext);
    //--Truyền duration của audio tới ControlsMid
    const { durationTime, setDurationTime } = useContext(MusicContext);

    //-- Truyền đơn vị % từ hàm handleTimeUpdate để truyền tới comp ControlsMid
    const { setIsSeek } = useContext(MusicContext);

    //-- Truyền ref của audio để truyền qua comp ControlsMid
    const { setRefMusic } = useContext(MusicContext);

    //--Nhận ref của btn NextSong
    const { clickRefFunc } = useContext(MusicContext);
    // Repeate
    const { activeRP } = useContext(MusicContext);

    //
    // Xử lý Seek
    const handleTimeUpdate = (e) => {
        setCurrentTime(e.currentTarget.currentTime);
        const percent = Math.floor((currentTime / durationTime) * 100);
        setIsSeek(percent);
    };
    // onClick;
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
        setSelectPlay(audio);
        setSelectMusic(data);
        setSelectButtonPlay(!selectButtonPlay);
        setRefMusic(audioRef.current);
    };
    const handleOnEndedData = () => {
        if (activeRP) {
            audioRef.current.play();
        } else {
            clickRefFunc.click();
        }
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
                    onEnded={handleOnEndedData}
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
