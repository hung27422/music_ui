import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss'
import { Sidebar } from '../components/Sidebar';
import { PlayMusic } from '../components/PlayMusic';

const cx = classNames.bind(styles)
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <Sidebar></Sidebar>
                <div>{children}</div>
            </div>
            <PlayMusic></PlayMusic>
        </div>
    );
}

export default DefaultLayout;
