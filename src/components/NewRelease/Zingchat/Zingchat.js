
import classNames from 'classnames/bind';
import styles from './Zingchat.module.scss';

const cx = classNames.bind(styles);
function Zingchat() {
    return (
        <div className={cx('wrapper')}>
            <h2>Zing chat</h2>
        </div>
    );
}

export default Zingchat;
