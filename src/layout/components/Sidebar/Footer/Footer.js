import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('details')}>
                <span>About</span>
                <span>Newsroom</span>
                <span>Contact</span>
                <span>Careers</span>
            </div>
            <div className={cx('details')}>
                <span>TikTok for Good</span>
                <span>Advertise</span>
                <span>TikTok LIVE Creator Networks</span>
                <span>Developers</span>
                <span>Transparency</span>
                <span>TikTok Rewards</span>
                <span>TikTok Embeds</span>
            </div>
            <div className={cx('details')}>
                <span>Help</span>
                <span>Safety</span>
                <span>Terms</span>
                <span>Privacy Policy</span>
                <span>Privacy Center</span>
                <span>Creator Potal</span>
                <span>Community Guidelines</span>
            </div>
            <div className={cx('details')}>
                <span>© 2023 TikTok</span>
            </div>
        </div>
    );
}

export default Footer;
