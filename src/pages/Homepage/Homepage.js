import './Homepage.module.scss';
import Header from './Header';

import classNames from 'classnames/bind';
import styles from './Homepage.module.scss'
const cx = classNames.bind(styles)
function Homepage() {
    return <div className={cx('wrapper')}>
        <Header/>
    </div>;
}

export default Homepage;
