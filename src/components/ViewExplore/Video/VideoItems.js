import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import styles from './Video.module.scss';
import video from '~/assets/videos';
import { PlayRegularIcon } from '~/components/Icons';
import { LoveIconRegular } from '../../Icons/Icons';

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
                        muted="muted"
                    ></video>
                </div>
                <div className={cx('card-footer')}>
                    <PlayRegularIcon />
                    <span className={cx('count-view')}>2M</span>
                </div>
            </div>
            <div className={cx('detail-video')}>
                <div className={cx('description-video')}>
                    A description for video of me, explored ui with ReactJS. A description for video of me, explored ui
                    with ReactJS
                </div>
                <div className={cx('user-video')}>
                    <div className={cx('user-details')}>
                        <img
                            src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/428690825_1169042500744041_2617608444660312653_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHsCx4Y4F-bd8GMfeHt3qGBfPNg5yO4r7h882DnI7ivuDwqf2Yxi1Zu9PukGfWQ_hou3lX2mtGy4FCrSHrsci_o&_nc_ohc=P_ygdaT-Fg0AX_ilE4D&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfAJeqQI7dl0BuhA5tbxZCCBtd-0YFSRDPz9IDYCBmE9LA&oe=65FE4B2C"
                            alt=""
                        />
                        <div className={cx('username')}>nglehoang</div>
                    </div>
                    <div className={cx('liked-details')}>
                        <LoveIconRegular />
                        <div className={cx('count-liked')}>2M</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoItems;
