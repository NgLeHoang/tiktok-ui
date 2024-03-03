import classNames from 'classnames/bind';
import styles from './ViewVideo.module.scss';
import Header from './Header';
import VideoAction from './Video/VideoAction';
import Video from './Video/Video';

const cx = classNames.bind(styles);

function VideoItems() {
    return (
        <div className={cx('container')}>
            <div className={cx('video-items')}></div>
            <div className={cx('container')}>
                <Header />
                <div className={cx('main-video')}>
                    <Video />
                    <VideoAction />
                </div>
            </div>
        </div>
    );
}

export default VideoItems;
