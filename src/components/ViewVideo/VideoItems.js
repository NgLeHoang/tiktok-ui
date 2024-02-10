import classNames from 'classnames/bind';
import styles from './ViewVideo.module.scss';
import Header from './Header';

const cx = classNames.bind(styles);

function VideoItems() {
    return (
        <div className={cx('container')}>
            <div className={cx('video-items')}></div>
            <Header />
        </div>
    );
}

export default VideoItems;
