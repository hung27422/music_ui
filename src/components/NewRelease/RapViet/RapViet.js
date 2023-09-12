import classNames from 'classnames/bind';

import styles from './RapViet.module.scss';
import MusicItem from '~/components/MusicItem - S/MusicItem';
import { useContext, useEffect, useState } from 'react';
import { MusicContext } from '~/components/UseContextMusic/ContextMusic';
const cx = classNames.bind(styles);

function AllMusic() {
    const [value, setValue] = useState([]);
    const { selectMusic, currentSongIndex, setListSong, setSelectMusic } = useContext(MusicContext);
    useEffect(() => {
        fetch('http://localhost:3000/newreleaserapviet')
            .then((response) => response.json())
            .then((response) => {
                setValue(response);
            });
    }, []);

    useEffect(() => {
        setListSong(value);
    }, [setListSong, value]);
    useEffect(() => {   
        if (!selectMusic) {
            setSelectMusic(value[currentSongIndex]);
        }
    }, [currentSongIndex, selectMusic, setSelectMusic, value]);
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
                    (result, index) =>
                        result.column === '2' && (
                            <MusicItem crIndex={index} key={result.id} border data={result}></MusicItem>
                        ),
                )}
            </div>
            <div className={cx('body-right')}>
                {value.map(
                    (result, index) =>
                        result.column === '3' && (
                            <MusicItem crIndex={index} key={result.id} border data={result}></MusicItem>
                        ),
                )}
            </div>
        </div>
    );
}

export default AllMusic;
