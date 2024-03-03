import classNames from 'classnames/bind';
import styles from './Control.module.scss';
import InputSlider from '~/components/InputSlider';
import { VolumeIcon, VolumeMuteIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function VolumeVideo({
    volumeValue,
    className,
    onChangeVolume = () => {},
    onClick = () => {},
    widthThumb,
    heightThumb,
    width,
    height,
    widthY,
    heightY,
    widthIcon,
    heightIcon,
    x,
    y,
    backgroundWrapper = 'rgb(27, 27, 27)',
    borderRadius = '4px',
    isMute = false,
}) {
    const MIN_VALUE = 0;
    const MAX_VALUE = 100;
    const STEP = 0.0001;

    return (
        <div
            className={cx('volume-wrapper', {
                [className]: className,
            })}
        >
            <div onClick={onClick} className={cx('control-wrapper')}>
                {isMute ? (
                    <VolumeMuteIcon width={widthIcon} height={heightIcon} />
                ) : (
                    <VolumeIcon width={widthIcon} height={heightIcon} />
                )}
            </div>
            <div style={{ bottom: y, left: x }} className={cx('slider-container')}>
                <InputSlider
                    className={cx('volume-slider')}
                    onChange={onChangeVolume}
                    width={width}
                    height={height}
                    widthY={widthY}
                    heightY={heightY}
                    widthThumb={widthThumb}
                    heightThumb={heightThumb}
                    borderRadius={borderRadius}
                    bgWrapper={backgroundWrapper}
                    min={MIN_VALUE}
                    max={MAX_VALUE}
                    value={volumeValue}
                    step={STEP}
                    isVertical
                />
            </div>
        </div>
    );
}

export default VolumeVideo;
