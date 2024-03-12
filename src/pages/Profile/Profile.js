import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import ViewProfile from '~/components/ViewProfile';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('wrapper')}>
            <ViewProfile />
        </div>
    );
}

export default Profile;
