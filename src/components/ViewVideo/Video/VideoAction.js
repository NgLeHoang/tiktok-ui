import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import Button from '~/components/Button';
import { LoveIcon, CommentIcon, FavouriteSolidIcon, ShareIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function VideoAction() {
    return (
        <div className={cx('container-actions')}>
            <div className={cx('action-items')}>
                <Button className={cx('btn-action')}>
                    <LoveIcon />
                </Button>
                <p className={cx('info-action')}>2M</p>
            </div>
            <div className={cx('action-items')}>
                <Button className={cx('btn-action')}>
                    <CommentIcon />
                </Button>
                <p className={cx('info-action')}>2M</p>
            </div>
            <div className={cx('action-items')}>
                <Button className={cx('btn-action')}>
                    <FavouriteSolidIcon />
                </Button>
                <p className={cx('info-action')}>2M</p>
            </div>
            <div className={cx('action-items')}>
                <Button className={cx('btn-action')}>
                    <ShareIcon />
                </Button>
                <p className={cx('info-action')}>2M</p>
            </div>
        </div>
    );
}

export default VideoAction;
