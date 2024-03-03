import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import video from '~/assets/videos';
import PlayVideo from '../../Control/PlayVideo';
import { useRef } from 'react';
import { useState } from 'react';
import VolumeVideo from '../../Control/VolumeVideo';

const cx = classNames.bind(styles);

function Video() {
    const videoRef = useRef();

    const [playVideo, setPlayVideo] = useState(false);

    // useEffect(() => {
    //     const callBack = (entry) => {
    //         const options = {
    //             root: null,
    //             rootMargin: '0px',
    //             threshold: 0.75,
    //         };

    //         entry.forEach((entries) => {
    //             if (entries.isIntersecting) {
    //                 const playPromise = entries.target.play();

    //                 if (playPromise !== undefined) {
    //                     playPromise.then(() => {}).catch((error) => {});
    //                 }

    //                 setPlayVideo(true);
    //             } else {
    //                 entries.target.pause();

    //                 setPlayVideo(false);
    //             }
    //         });

    //         const observer = new IntersectionObserver(callBack, options);

    //         observer.observe(videoRef.current);

    //         return () => {
    //             if (videoRef.current) {
    //                 observer.unobserve(videoRef.current);
    //             }
    //         };
    //     };
    // }, [videoRef.current]);

    const handlePlayVideo = (e) => {
        setPlayVideo((prev) => !prev);

        !playVideo ? videoRef.current.play() : videoRef.current.pause();
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('section-video')}>
                <div className={cx('card-video')}>
                    <div className={cx('container-video')}>
                        <video ref={videoRef} className={cx('video')} src={video.videotest}></video>
                    </div>
                    <div className={cx('container-control')}>
                        <div
                            className={cx('btn-control', {
                                'play-control': true,
                            })}
                        >
                            <PlayVideo isPlay={playVideo} onClick={handlePlayVideo} />
                        </div>
                        <VolumeVideo
                            className={cx('btn-control', {
                                'volume-control': true,
                            })}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;
