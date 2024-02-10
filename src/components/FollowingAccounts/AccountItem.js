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
                src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-1/419126469_1040512314098930_1473214456578267748_n.jpg?stp=dst-jpg_p320x320&_nc_cat=106&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeE_dzwyoZCvTfZ6el-smv0tQ84X4l3QLbRDzhfiXdAttAIR9iNlCaJmlxo6-18GoZFF9g2Wly633UTq4B2BwLw_&_nc_ohc=xEjPyW4WEPwAX9lJFSa&_nc_ht=scontent.fdad3-5.fna&oh=00_AfAWO09FwCn39yYnk6Itj-UdP5XYxxWQibYMwkGRtjRB7Q&oe=65C234B1"
                alt=""
            />
            <div className={cx('item-info')}>
                <p className={cx('username')}>
                    <strong>ngthihien</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('fullname')}>Nguyễn Thị Hiền</p>
            </div>
        </div>
    );
}

export default AccountItem;
