import { useContext, useEffect, useRef } from 'react';
import { MusicContext } from '../UseContextMusic/ContextMusic';
import { parse } from '@fortawesome/fontawesome-svg-core';

function AudioPlayer({ data }) {
    const audioRef = useRef(null);

    const {
        selectMusic,
        setRefMusic,
        currentTime,
        setCurrentTime,
        durationTime,
        setDurationTime,
        setIsSeek,
        clickRefFunc,
        activeRP,
        volume,
        setVolume,
        muteVolume,
    } = useContext(MusicContext);

    useEffect(() => {
        setRefMusic(audioRef);
    }, [audioRef, setRefMusic]);

    useEffect(() => {
        if (audioRef.current) {
            if (!muteVolume) {
                audioRef.current.volume = volume;
            } else {
                audioRef.current.volume = 0;
                setVolume(0);
            }
        }
    }, [muteVolume, setVolume, volume]);

    const handleTimeUpdate = (e) => {
        setCurrentTime(e.currentTarget.currentTime);
        const percent = Math.floor((currentTime / durationTime) * 100);
        setIsSeek(percent);
    };

    const handleOnEndedData = () => {
        if (activeRP) {
            audioRef.current.play();
        } else {
            clickRefFunc.click();
        }
    };

    return (
        <audio
            ref={audioRef}
            src={selectMusic?.media}
            onLoadedData={(e) => {
                setDurationTime(e.currentTarget.duration.toFixed(2));
            }}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleOnEndedData}
        ></audio>
    );
}

export default AudioPlayer;
