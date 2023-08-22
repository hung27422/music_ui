import classNames from 'classnames/bind';
import MusicItem from '~/components/MusicItem - S';
import styles from './RapViet.module.scss';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);
function RapViet() {
    const [value, setValue] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/newreleaserapviet`)
            .then((response) => response.json())
            .then((response) => setValue(response));
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
                <MusicItem border></MusicItem>
                <MusicItem border></MusicItem>
                <MusicItem border></MusicItem>
                <MusicItem border></MusicItem>
            </div>
        </div>
    );
}

export default RapViet;
