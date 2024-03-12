import classNames from 'classnames/bind';
import styles from './ViewProfile.module.scss';
import HeaderProfile from './HeaderProfile';
import Items from './Items/Items';

const cx = classNames.bind(styles);

function ViewProfile() {
    return (
        <div className={cx('wrapper')}>
            <HeaderProfile />
            <Items />
        </div>
    );
}

export default ViewProfile;
