import classNames from 'classnames/bind';
import styles from './Trend.module.scss';
import './Trend.module.scss';

import images from '~/assets/images/images';
import Header from '~/layouts/components/Header/Header';
import MusicItemL from '~/components/MusicItem - L/MusicItemL';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);
function Trend() {
    const [value, setValue] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/trends`)
            .then((response) => response.json())
            .then((response) => setValue(response));
    });
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('body')}>
                <div className={cx('logo-trend')}>
                    <img className={cx('image')} src={images.xuhuong} alt="" />
                </div>
                <div className={cx('list-music')}>
                    {value.map((result) => {
                        return <MusicItemL key={result.id} data={result} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Trend;
