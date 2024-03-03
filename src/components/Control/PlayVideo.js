import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Control.module.scss';
import { PauseIcon, PlayIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
function PlayVideo({ isPlay = false, onClick = () => {}, className, width, height }) {
    return (
        <div
            onClick={onClick}
            className={cx('control-wrapper', {
                [className]: className,
            })}
        >
            {isPlay ? <PauseIcon width={width} height={height} /> : <PlayIcon width={width} height={height} />}
        </div>
    );
}

PlayVideo.propTypes = {
    isPlay: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
};

export default PlayVideo;
