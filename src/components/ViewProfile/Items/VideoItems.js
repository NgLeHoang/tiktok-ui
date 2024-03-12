import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import styles from './Items.module.scss';
import video from '~/assets/videos';
import { PlayRegularIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function VideoItems() {
    const videoRef = useRef();

    const [playVideo, setPlayVideo] = useState(false);

    const handlePlayVideo = (e) => {
        setPlayVideo((prev) => !prev);

        !playVideo ? videoRef.current.play() : videoRef.current.pause();
    };

    const handleTogglePlay = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setPlayVideo(true);
        } else {
            videoRef.current.pause();
            setPlayVideo(false);
        }
    };

    return (
        <div className={cx('section-video')}>
            <div className={cx('card-video')}>
                <div className={cx('container-video')}>
                    <video
                        ref={videoRef}
                        className={cx('video')}
                        src={video.videotest}
                        onMouseEnter={handlePlayVideo}
                        onMouseLeave={handleTogglePlay}
                    ></video>
                </div>
                <div className={cx('card-footer')}>
                    <PlayRegularIcon />
                    <span className={cx('count-view')}>2M</span>
                </div>
            </div>
            <div className={cx('detail-video')}>A decription for video of me</div>
        </div>
    );
}

export default VideoItems;
