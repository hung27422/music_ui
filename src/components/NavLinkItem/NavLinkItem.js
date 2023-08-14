import classNames from 'classnames/bind';
import styles from './NavLinkItem.module.scss';

import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function NavLinkItem({ title, to }) {
    return (
        <NavLink to={to} className={(nav) => cx('wrapper', { active: nav.isActive })}>
            {({ isActive }) => (
                <>
                    {isActive ? (
                        <span className={cx('active', 'btn-navlink')}>{title} </span>
                    ) : (
                        <span className={cx('outline', 'btn-navlink')}>{title} </span>
                    )}
                </>
            )}
        </NavLink>
    );
}

export default NavLinkItem;
