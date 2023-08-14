import classNames from 'classnames/bind';
import styles from './NewRelease.module.scss';

import { NavLink, Route, Router, Routes } from 'react-router-dom';
import NavLinkItem from '../NavLinkItem/NavLinkItem';
import Zingchat from './Zingchat/Zingchat';
import RapVietPage from './RapVietPage/RapVietPage';
import configs from '~/Configs/config';
const cx = classNames.bind(styles);
function NewRelease({ title }) {
    return (
        <div className={cx('wrapper')}>
            <h2>{title}</h2>
            <div className={cx('btn-action')}>
                <NavLink className={cx('btn')}>Rap Viet</NavLink>
                <NavLink className={cx('btn')}>Rap </NavLink>
            </div>
        </div>
    );
}

export default NewRelease;
