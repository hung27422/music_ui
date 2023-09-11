import classNames from 'classnames/bind';
import MusicItem from '~/components/MusicItem - S';
import styles from './RapViet.module.scss';
import { useContext, useEffect, useState } from 'react';
import { MusicContext } from '~/components/UseContextMusic/ContextMusic';

const cx = classNames.bind(styles);
function RapViet() {
    const [value, setValue] = useState([]);
    const { selectMusic, currentSongIndex, setSelectMusic, listSong, setListSong } = useContext(MusicContext);

    useEffect(() => {
        fetch('http://localhost:3000/newreleaseall')
            .then((response) => response.json())
            .then((response) => {
                setValue(response);
            });
    }, []);

    useEffect(() => {
        if (!selectMusic) {
            setSelectMusic(value[currentSongIndex]);
        }
        setListSong(value);
    }, [currentSongIndex, selectMusic, setListSong, setSelectMusic, value]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('body-left')}>
                {listSong.map(
                    (result) => result.column === '1' && <MusicItem key={result.id} border data={result}></MusicItem>,
                )}
            </div>
            <div className={cx('body-mid')}>
                {listSong.map(
                    (result) => result.column === '2' && <MusicItem key={result.id} border data={result}></MusicItem>,
                )}
            </div>
            <div className={cx('body-right')}>
                <MusicItem border></MusicItem>
                <MusicItem border></MusicItem>
                <MusicItem border></MusicItem>
                <MusicItem border></MusicItem>
            </div>
        </div>
    );
}

export default RapViet;
