import classNames from 'classnames/bind';
import styles from './Following.module.scss';
import ViewFollowing from '~/components/ViewFollowing/ViewFollowing';

const cx = classNames.bind(styles);

function Following() {
    return (
        <div className={cx('wrapper')}>
            <ViewFollowing />
        </div>
    );
}

export default Following;
