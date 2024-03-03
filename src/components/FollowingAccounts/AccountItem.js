import classNames from 'classnames/bind';
import styles from './FollowingAccounts.module.scss';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <Image
                className={cx('avatar')}
                src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-1/428690825_1169042500744041_2617608444660312653_n.jpg?stp=c0.107.320.320a_dst-jpg_p320x320&_nc_cat=110&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeHsCx4Y4F-bd8GMfeHt3qGBfPNg5yO4r7h882DnI7ivuDwqf2Yxi1Zu9PukGfWQ_hou3lX2mtGy4FCrSHrsci_o&_nc_ohc=U8BgBot13EYAX__PxpL&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfDjdwhxXqKNAgGIDiGWm6I3WerrWEz0CmIJMnR5OwqomQ&oe=65E737EA"
                alt=""
            />
            <div className={cx('item-info')}>
                <p className={cx('username')}>
                    <strong>nglehoang</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('fullname')}>Nguyễn Lê Hoàng</p>
            </div>
        </div>
    );
}

export default AccountItem;
