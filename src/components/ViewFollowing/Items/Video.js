import classNames from 'classnames/bind';
import styles from './Items.module.scss';
import { useRef, useState } from 'react';
import video from '~/assets/videos';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Video() {
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
                        className={cx('video')}
                        ref={videoRef}
                        muted="mute"
                        src={video.videotest}
                        onMouseEnter={handlePlayVideo}
                        onMouseLeave={handleTogglePlay}
                    ></video>
                </div>
                <div className={cx('user-info')} onMouseEnter={handlePlayVideo} onMouseLeave={handleTogglePlay}>
                    <div className={cx('avatar')}>
                        <img
                            src="https://scontent.fsgn14-1.fna.fbcdn.net/v/t39.30808-1/428690825_1169042500744041_2617608444660312653_n.jpg?stp=c0.107.320.320a_dst-jpg_p320x320&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHsCx4Y4F-bd8GMfeHt3qGBfPNg5yO4r7h882DnI7ivuDwqf2Yxi1Zu9PukGfWQ_hou3lX2mtGy4FCrSHrsci_o&_nc_ohc=MkdxffDhiqoAX-5jMCA&_nc_ht=scontent.fsgn14-1.fna&oh=00_AfBAPXGH22hunzGimM56HnIMwNjh54CiBb4A9G_oF11rtQ&oe=6600ED2A"
                            alt=""
                        />
                    </div>
                    <div className={cx('fullname')}>Nguyễn Lê Hoàng</div>
                    <div className={cx('username')}>
                        nglehoang
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </div>
                    <Button primary className={cx('btn-follow')}>
                        Follow
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Video;
