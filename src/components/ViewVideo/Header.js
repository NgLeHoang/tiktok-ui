import classNames from 'classnames/bind';
import styles from './ViewVideo.module.scss';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('header-video')}>
            <img
                className={cx('avatar')}
                src="https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-1/418431424_1144889176492707_3866351188939411673_n.jpg?stp=dst-jpg_s320x320&_nc_cat=104&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeEC1Gib-pHh6Svb9dQWW6B8YxOpbAFGnl5jE6lsAUaeXvErnwq77Fu3T_oXk8cvA1-95m0904BoZsTpje91Gu9m&_nc_ohc=EktO-b7LPKMAX-lEXIy&_nc_ht=scontent-arn2-1.xx&oh=00_AfAF1--Ejz2V5uZED4svrkq4GE2aJ7Jj2u5gLGQHd_lIGg&oe=65C34A95"
                alt=""
            />
            <div className={cx('item-info')}>
                <div className={cx('post-info')}>
                    <Link to="" className={cx('nickname')}>
                        Nguyen Le Hoang
                    </Link>
                    <Link to="" className={cx('username')}>
                        nglehoang
                    </Link>
                </div>
                <div className={cx('description')}>
                    <p className={cx('text-description')}>What do you like?</p>
                </div>
                <div className={cx('music')}>
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
