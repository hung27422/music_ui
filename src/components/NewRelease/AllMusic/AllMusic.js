import classNames from 'classnames/bind';

import styles from './AllMusic.module.scss';
import MusicItem from '~/components/MusicItem - S/MusicItem';
import { useEffect, useState } from 'react';
import { useDebounce } from '~/hooks';
const cx = classNames.bind(styles);

function AllMusic() {
    const [value, setValue] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/newreleaseall')
            .then((response) => response.json())
            .then((response) => {
                setValue(response);
            });
    });
    return (
        <div className={cx('wrapper')}>
            <div className={cx('body-left')}>
                {value.map((result) => result.column === '1' && <MusicItem border data={result}></MusicItem>)}
            </div>
            <div className={cx('body-mid')}>
                {value.map((result) => result.column === '2' && <MusicItem border data={result}></MusicItem>)}
            </div>
            <div className={cx('body-right')}>
                {value.map((result) => result.column === '3' && <MusicItem border data={result}></MusicItem>)}
            </div>
        </div>
    );
}

export default AllMusic;
