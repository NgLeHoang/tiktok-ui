import classNames from 'classnames/bind';
import styles from './ViewProfile.module.scss';
import Button from '~/components/Button';
import {
    EditIcon,
    PrivatedIcon,
    ShareIcon,
    EmbedIcon,
    CopyLinkIcon,
    EmailIcon,
    FacebookIcon,
    LineIcon,
    LinkedInIcon,
    PinterestIcon,
    RedditIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsAppIcon,
} from '~/components/Icons';
import Menu from '../Popper/Menu/Menu';

const cx = classNames.bind(styles);

function HeaderProfile() {
    const shareMenu = [
        {
            icon: <EmbedIcon />,
            title: 'Embed',
            to: '/@Embed',
        },
        {
            icon: <FacebookIcon />,
            title: 'Share to Facebook',
            to: '/@facebook',
        },
        {
            icon: <WhatsAppIcon />,
            title: 'Share to WhatsApp',
            to: '/@whatsapp',
        },
        {
            icon: <TwitterIcon />,
            title: 'Share to Twitter',
            to: '/@twitter',
        },
        {
            icon: <CopyLinkIcon />,
            title: 'Copy link',
            to: '/@copylink',
        },
        {
            icon: <LinkedInIcon />,
            title: 'Share to LinkedIn',
            to: '/@linkedin',
        },
        {
            icon: <RedditIcon />,
            title: 'Share to Reddit',
            to: '/@reddit',
        },
        {
            icon: <TelegramIcon />,
            title: 'Share to Telegram',
            to: '/@telegram',
        },
        {
            icon: <EmailIcon />,
            title: 'Share to Email',
            to: '/@email',
        },
        {
            icon: <LineIcon />,
            title: 'Share to Line',
            to: '/@line',
        },
        {
            icon: <PinterestIcon />,
            title: 'Share to Pinterest',
            to: '/@pinterest',
        },
    ];
    return (
        <header className={cx('header-wrapper')}>
            <div className={cx('info')}>
                <div className={cx('info-user')}>
                    <div className={cx('avatar')}>
                        <img
                            src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-1/428690825_1169042500744041_2617608444660312653_n.jpg?stp=c0.107.320.320a_dst-jpg_p320x320&_nc_cat=110&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeHsCx4Y4F-bd8GMfeHt3qGBfPNg5yO4r7h882DnI7ivuDwqf2Yxi1Zu9PukGfWQ_hou3lX2mtGy4FCrSHrsci_o&_nc_ohc=U8BgBot13EYAX__PxpL&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfDjdwhxXqKNAgGIDiGWm6I3WerrWEz0CmIJMnR5OwqomQ&oe=65E737EA"
                            alt=""
                        />
                    </div>
                    <div className={cx('info-details')}>
                        <h1 className={cx('nickname')}>Nguyễn Lê Hoàng</h1>
                        <h4 className={cx('username')}>nglehoang</h4>
                        <Button leftIcon={<EditIcon />} className={cx('edit-btn')}>
                            Edit profile
                        </Button>
                    </div>
                    <Menu items={shareMenu}>
                        <div className={cx('share')}>
                            <ShareIcon />
                        </div>
                    </Menu>
                </div>
                <div className={cx('info-count')}>
                    <div className={cx('count-title')}>
                        <div className={cx('count-number')}>1</div>
                        Following
                    </div>
                    <div className={cx('count-title')}>
                        <div className={cx('count-number')}>2</div>
                        Followers
                    </div>
                    <div className={cx('count-title')}>
                        <div className={cx('count-number')}>10</div>
                        Liked
                    </div>
                </div>
                <h2 className={cx('bio')}>No bio yet.</h2>
            </div>
            <div className={cx('video-account')}>
                <div className={cx('video-me', 'active')}>Video</div>
                <div className={cx('video-me')}>
                    <PrivatedIcon className={cx('private-icon')} />
                    Favourites
                </div>
                <div className={cx('video-me')}>
                    <PrivatedIcon className={cx('private-icon')} />
                    Liked
                </div>
                <div className={cx('bottom-line')}></div>
            </div>
        </header>
    );
}

export default HeaderProfile;
