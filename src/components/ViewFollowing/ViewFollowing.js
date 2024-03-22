import classNames from 'classnames/bind';
import styles from './ViewFollowing.module.scss';
import Items from './Items/Items';

const cx = classNames.bind(styles);

function ViewFollowing() {
    return (
        <div className={cx('wrapper')}>
            <Items />
        </div>
    );
}

export default ViewFollowing;
