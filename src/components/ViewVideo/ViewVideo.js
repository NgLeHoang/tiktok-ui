import classNames from 'classnames/bind';
import styles from './ViewVideo.module.scss';
import VideoItems from './VideoItems';

const cx = classNames.bind(styles);

function ViewVideo() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('video-wrapper')}>
                <VideoItems />
            </div>
        </div>
    );
}

export default ViewVideo;
