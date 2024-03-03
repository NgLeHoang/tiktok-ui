import classNames from 'classnames/bind';
import styles from './ViewVideo.module.scss';
import Button from '~/components/Button';
import { MusicIcon } from '~/components/Icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('header-video')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-1/428690825_1169042500744041_2617608444660312653_n.jpg?stp=c0.107.320.320a_dst-jpg_p320x320&_nc_cat=110&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeHsCx4Y4F-bd8GMfeHt3qGBfPNg5yO4r7h882DnI7ivuDwqf2Yxi1Zu9PukGfWQ_hou3lX2mtGy4FCrSHrsci_o&_nc_ohc=U8BgBot13EYAX__PxpL&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfDjdwhxXqKNAgGIDiGWm6I3WerrWEz0CmIJMnR5OwqomQ&oe=65E737EA"
                alt=""
            />
            <div className={cx('item-info')}>
                <div className={cx('post-info')}>
                    <Link to="" className={cx('nickname')}>
                        Nguyen Le Hoang
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </Link>
                    <Link to="" className={cx('username')}>
                        nglehoang
                    </Link>
                </div>
                <div className={cx('description')}>
                    <p className={cx('text-description')}>What do you like?</p>
                </div>
                <div className={cx('music')}>
                    <MusicIcon />
                    <span className={cx('music-name')}>Lang Du - MCK</span>
                </div>
            </div>
            <Button className={cx('btn-follow')} small outline>
                Follow
            </Button>
        </header>
    );
}

export default Header;
