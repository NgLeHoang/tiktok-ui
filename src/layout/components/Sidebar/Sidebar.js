import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import {
    ExploreActiveIcon,
    ExploreIcon,
    FollowingIcon,
    FriendsActiveIcon,
    FriendsIcon,
    HomeActiveIcon,
    HomeIcon,
    LiveStudioActiveIcon,
    ProfileActiveIcon,
    ProfileIcon,
} from '~/components/Icons/Icons';
import { LiveStudioSidebarIcon } from '~/components/Icons/Icons';
import FollowingAccounts from '~/components/FollowingAccounts/FollowingAccounts';
import Button from '~/components/Button';
import Footer from './Footer/Footer';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('sidebar-nav')}>
                <Menu>
                    <MenuItem
                        title="For You"
                        to={config.routes.home}
                        icon={<HomeIcon />}
                        activeIcon={<HomeActiveIcon />}
                    />
                    <MenuItem
                        title="Following"
                        to={config.routes.following}
                        icon={<FollowingIcon />}
                        activeIcon={<FriendsActiveIcon />}
                    />
                    <MenuItem
                        title="Friends"
                        to={config.routes.friends}
                        icon={<FriendsIcon />}
                        activeIcon={<FriendsActiveIcon />}
                    />
                    <MenuItem
                        title="Explore"
                        to={config.routes.explore}
                        icon={<ExploreIcon />}
                        activeIcon={<ExploreActiveIcon />}
                    />
                    <MenuItem
                        title="LIVE"
                        to={config.routes.live}
                        icon={<LiveStudioSidebarIcon />}
                        activeIcon={<LiveStudioActiveIcon />}
                    />
                    <MenuItem
                        title="Profile"
                        to={config.routes.profile}
                        icon={<ProfileIcon width="2.4rem" height="2.4rem" />}
                        activeIcon={<ProfileActiveIcon width="2.4rem" height="2.4rem" />}
                    />
                </Menu>
                <FollowingAccounts label="Following accounts" />
                <Button className={cx('create-effects-btn')}>Create effects</Button>
                <Footer />
            </div>
        </aside>
    );
}

export default Sidebar;
