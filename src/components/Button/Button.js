import classNames from 'classnames/bind';

import styles from './Button.module.scss';
import { Link, NavLink } from 'react-router-dom';
const cx = classNames.bind(styles);
function Button({ to, link, href, children, onClick, primary,outline,className, ...passProps }) {
    let Comp = 'button';

    let props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    }
    if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        className
    });
    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
