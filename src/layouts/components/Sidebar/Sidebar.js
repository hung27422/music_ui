import './Sidebar.module.scss';
import classNames from 'classnames/bind';
import {
    HomeIcon,
    TrendingIcon,
    LibraryIcon,
    Top100Icon,
    TopicOptionsIcon,
    ListenNearIcon,
    SongFavoriteIcon,
} from '~/components/Icons';
import { Link } from 'react-router-dom';

import images from '~/assets/images/images';
import styles from './Sidebar.module.scss';
import Menu from './Menu/Menu';
import MenuItems from './Menu/MenuItems';
import configs from '~/Configs/config';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Link to={configs.router.home} className={cx('info-logo')}>
                    <img className={cx('icon-logo')} src={images.iconLogo} alt="iconlogo" />
                    <img className={cx('logo')} src={images.logo} alt="logo" />
                </Link>
                <Menu>
                    <MenuItems title="Trang chủ" to={configs.router.home} icon={<HomeIcon />} />
                    <MenuItems title="Xu hướng" to={configs.router.trend} icon={<TrendingIcon />} />
                    <MenuItems title="Thư viện" to={configs.router.library} icon={<LibraryIcon />} />
                </Menu>
            </div>
            <div className={cx('sidebar-divide')}></div>
            <div className={cx('body')}>
                <div className={cx('body-scroll')}>
                    <Menu>
                        <MenuItems title="Top 100" to={configs.router.home} icon={<Top100Icon />} />
                        <MenuItems title="Chủ đề và thể loại" to={configs.router.trend} icon={<TopicOptionsIcon />} />
                        <MenuItems title="Nghe gần đây" to={configs.router.library} icon={<ListenNearIcon />} />
                        <MenuItems
                            title="Bài hát yêu thích"
                            to={configs.router.songFavorite}
                            icon={<SongFavoriteIcon />}
                        />
                        
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
