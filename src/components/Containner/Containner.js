import classNames from 'classnames/bind';

import styles from './Containner.module.scss';
import MediaContent from './MediaContent';
const cx = classNames.bind(styles);
function Containner({ title }) {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>{title}</h2>
            <div className={cx('content')}>
                <MediaContent />
                <MediaContent />
                <MediaContent />
                <MediaContent />
                <MediaContent />
            </div>
        </div>
    );
}

export default Containner;
