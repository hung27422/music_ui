import classNames from 'classnames/bind';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

import styles from './MusicItem.module.scss';
import { useState, useContext, useRef } from 'react';
import { MusicContext } from '../UseContextMusic/ContextMusic';

const cx = classNames.bind(styles);
function MusicItem({ border, data }) {
    const audioRef = useRef();
    //Hiển thị data phần controls left => Xong ( không đụng tới)
    const { selectMusic, setSelectMusic } = useContext(MusicContext);
    // -------------------------------------------------------------

    //Hiển thị data phần contrls mid
    const { playMusic, pauseMusic } = useContext(MusicContext);

    const [isPlaying, setIsPlaying] = useState(false);
    const {selectButtonPlay, setSelectButtonPlay} = useContext(MusicContext)
    //-- Đưa object audio chứa hàm play() và pause() vào state
    const { selectPlay, setSelectPlay } = useContext(MusicContext);

    if (data === undefined) {
        return <>....</>;
    }

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
        if (!isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }
        setIsPlaying(!isPlaying);
        setSelectPlay(audio);
        setSelectMusic(data);
        setSelectButtonPlay(isPlaying)
    };
    return (
        <div className={cx('wrapper', { border })}>
            <div className={cx('content')}>
                <div className={cx('figure')}>
                    <img className={cx('avatar')} src={data.avatar} alt={data.title} />
                </div>
                {!!isPlaying ? (
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

                <audio ref={audioRef} src={data.media}></audio>
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
