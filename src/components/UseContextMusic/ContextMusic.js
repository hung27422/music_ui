import { createContext, useState } from 'react';
// UseContext để selectMusicted
export const MusicContext = createContext(null);

function ContextMusic({ children }) {
    const [selectMusic, setSelectMusic] = useState(null);

    const [selectPlay, setSelectPlay] = useState(null);

    const [selectButtonPlay, setSelectButtonPlay] = useState(false);
    return (
        <MusicContext.Provider
            value={{
                selectMusic,
                setSelectMusic,

                selectPlay,
                setSelectPlay,

                selectButtonPlay,
                setSelectButtonPlay,
            }}
        >
            {children}
        </MusicContext.Provider>
    );
}

export default ContextMusic;
