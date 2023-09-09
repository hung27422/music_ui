import { useContext, useEffect, useRef } from 'react';
import { MusicContext } from '../UseContextMusic/ContextMusic';

function AudioPlayer() {
    const audioRef = useRef();

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
    } = useContext(MusicContext);
    useEffect(() => {
        setRefMusic(audioRef);
    }, [audioRef, setRefMusic]);
    
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
