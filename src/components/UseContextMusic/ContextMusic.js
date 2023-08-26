import { createContext, useState } from 'react';
// UseContext để selectMusicted
export const MusicContext = createContext(null);

function ContextMusic({ children }) {
    //Truyền dữ liệu bài hát qua controls left
    const [selectMusic, setSelectMusic] = useState(null);
    //Truyền dữ liệu phát.dừng bài hát qua controls mid
    const [selectPlay, setSelectPlay] = useState(null);
    const [selectButtonPlay, setSelectButtonPlay] = useState(false);
    //Truyền dữ liệu seek qua controls mid
    const [currentTime, setCurrentTime] = useState(0);
    const [durationTime, setDurationTime] = useState(0);
    const [isSeek, setIsSeek] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const [refMusic, setRefMusic] = useState();
    return (
        <MusicContext.Provider
            value={{
                selectMusic,
                setSelectMusic,

                selectPlay,
                setSelectPlay,

                selectButtonPlay,
                setSelectButtonPlay,

                currentTime,
                setCurrentTime,
                durationTime,
                setDurationTime,
                isSeek,
                setIsSeek,
                percentage,
                setPercentage,
                refMusic,
                setRefMusic,
            }}
        >
            {children}
        </MusicContext.Provider>
    );
}

export default ContextMusic;
