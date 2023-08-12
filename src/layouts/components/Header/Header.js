import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faDownload, faGear } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import Search from '~/layouts/components/Search';
const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('action-left')}>
                <div className={cx('btn-action')}>
                    <FontAwesomeIcon className={cx('btn-arrow')} icon={faChevronLeft} />
                    <FontAwesomeIcon className={cx('btn-arrow')} icon={faChevronRight} />
                </div>
                <Search />
            </div>
            <div className={cx('action-right')}>
                <Tippy content="Tải app" interactive>
                    <span className={cx('action-item')}>
                        <FontAwesomeIcon icon={faDownload} />
                    </span>
                </Tippy>
                <Tippy content="Cài đặt">
                    <span className={cx('action-item')}>
                        <FontAwesomeIcon icon={faGear} />
                    </span>
                </Tippy>
                <span className={cx('action-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.9.63/static/media/user-default.3ff115bb.png"
                        alt="avt"
                    />
                </span>
            </div>
        </div>
    );
}

export default Header;
