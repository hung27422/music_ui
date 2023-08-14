import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
const cx = classNames.bind(styles);

function MenuItems({ title, to, icon }) {
    return (
        <NavLink to={to} icon={icon} className={(nav) => cx('menu-item', { active: nav.isActive })}>
            <span className={cx('menu-icon')}>{icon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

export default MenuItems;
