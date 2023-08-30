import classNames from 'classnames/bind';

import styles from './AllMusic.module.scss';
import MusicItem from '~/components/MusicItem - S/MusicItem';
import { useContext, useEffect, useState } from 'react';
import { MusicContext } from '~/components/UseContextMusic/ContextMusic';
const cx = classNames.bind(styles);

function AllMusic() {
    const [value, setValue] = useState([]);
    const { currentSongIndex } = useContext(MusicContext);
    const { setSelectMusic } = useContext(MusicContext);
    const { listSong, setListSong } = useContext(MusicContext);

    useEffect(() => {
        fetch('http://localhost:3000/newreleaseall')
            .then((response) => response.json())
            .then((response) => {
                setValue(response);
            });
    }, []);

    useEffect(() => {
        setSelectMusic(value[currentSongIndex]);
        setListSong(value);
    }, [listSong, currentSongIndex, setListSong, setSelectMusic, value]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('body-left')}>
                {value.map(
                    (result, index) =>
                        result.column === '1' && (
                            <MusicItem crIndex={index} key={result.id} border data={result}></MusicItem>
                        ),
                )}
            </div>
            <div className={cx('body-mid')}>
                {value.map(
                    (result) => result.column === '2' && <MusicItem key={result.id} border data={result}></MusicItem>,
                )}
            </div>
            <div className={cx('body-right')}>
                {value.map(
                    (result) => result.column === '3' && <MusicItem key={result.id} border data={result}></MusicItem>,
                )}
            </div>
        </div>
    );
}

export default AllMusic;
