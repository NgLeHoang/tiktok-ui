import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import VideoItems from './VideoItems';

const cx = classNames.bind(styles);

function Video() {
    return (
        <div className={cx('wrapper')}>
            <VideoItems />
            <VideoItems />
            <VideoItems />
            <VideoItems />
            <VideoItems />
            <VideoItems />
        </div>
    );
}

export default Video;
