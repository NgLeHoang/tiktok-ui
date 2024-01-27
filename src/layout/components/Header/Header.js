import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faSignIn } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import config from '~/config';

import {
    CoinIcon,
    FavouriteIcon,
    HelpIcon,
    InboxIcon,
    LanguageIcon,
    LiveCreatorIcon,
    LiveStudioIcon,
    LogoutIcon,
    MessageIcon,
    ProfileIcon,
    SettingsIcon,
    ShortcutsIcon,
    UploadIcon,
} from '../../../components/Icons';
import Image from '../../../components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);
const currentUser = true;

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Vietnam',
                },
                {
                    code: 'العربية',
                    title: 'العربية',
                },
                {
                    code: 'বাঙ্গালি (ভারত)',
                    title: 'বাঙ্গালি (ভারত)',
                },
                {
                    code: 'Cebuano (Pilipinas)',
                    title: 'Cebuano (Pilipinas)',
                },
                {
                    code: 'Čeština (Česká republika)',
                    title: 'Čeština',
                },
                {
                    code: 'Deutsch',
                    title: 'Deutsch',
                },
                {
                    code: 'Ελληνικά (Ελλάδα)',
                    title: 'Ελληνικά (Ελλάδα)',
                },
                {
                    code: 'Español',
                    title: 'Español',
                },
                {
                    code: 'Suomi (Suomi)',
                    title: 'Suomi (Suomi)',
                },
                {
                    code: 'Filipino (Pilipinas)',
                    title: 'Filipino (Pilipinas)',
                },
                {
                    code: 'עברית (ישראל)',
                    title: 'עברית (ישראל)',
                },
                {
                    code: 'हिंदी',
                    title: 'हिंदी',
                },
                {
                    code: 'Magyar (Magyarország)',
                    title: 'Magyar (Magyarország)',
                },
                {
                    code: 'Bahasa Indonesia',
                    title: 'Bahasa Indonesia',
                },
                {
                    code: 'Italiano (Italia)',
                    title: 'Italiano (Italia)',
                },
                {
                    code: '日本語（日本）',
                    title: '日本語（日本）',
                },
                {
                    code: 'Basa Jawa (Indonesia)',
                    title: 'Basa Jawa (Indonesia)',
                },
                {
                    code: 'ខ្មែរ (កម្ពុជា)',
                    title: 'ខ្មែរ (កម្ពុជា)',
                },
                {
                    code: '한국어 (대한민국)',
                    title: '한국어 (대한민국)',
                },
            ],
        },
    },
    {
        icon: <HelpIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <ShortcutsIcon />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const userMenu = [
        {
            icon: <ProfileIcon />,
            title: 'View profile',
            to: '/@user',
        },
        {
            icon: <FavouriteIcon />,
            title: 'Favourite',
            to: '/@favourite',
        },
        {
            icon: <CoinIcon />,
            title: 'Get coin',
            to: '/coin',
        },
        {
            icon: <LiveStudioIcon />,
            title: 'LIVE Studio',
            to: '/live',
        },
        {
            icon: <LiveCreatorIcon />,
            title: 'LIVE Creator Hub',
            to: '/livecreator',
        },
        {
            icon: <SettingsIcon />,
            title: 'Settings',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <LogoutIcon />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home}>
                    <div className={cx('logo')}>
                        <img src={images.logo} alt="LH Video Social" />
                    </div>
                </Link>

                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 300]} content="Upload video">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Messages">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Inbox">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary rightIcon={<FontAwesomeIcon icon={faSignIn} />}>
                                Log in
                            </Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS}>
                        {currentUser ? (
                            <Image
                                src=""
                                className={cx('user-avatar')}
                                fallback="https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-1/419126469_1040512314098930_1473214456578267748_n.jpg?stp=dst-jpg_p320x320&_nc_cat=106&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeE_dzwyoZCvTfZ6el-smv0tQ84X4l3QLbRDzhfiXdAttAIR9iNlCaJmlxo6-18GoZFF9g2Wly633UTq4B2BwLw_&_nc_ohc=9r9LgezSVNwAX9GqWkz&_nc_ht=scontent-hkg4-1.xx&oh=00_AfDcKRAvtntPQ3C3-WE1H-9Pwgm0Dc4bKKRH7WgVcF1a-g&oe=65B85171"
                                alt="avatar"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
