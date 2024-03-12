import classNames from 'classnames/bind';
import styles from './Items.module.scss';
import VideoItems from './VideoItems';

const cx = classNames.bind(styles);

function Items() {
    return (
        <div className={cx('wrapper')}>
            <VideoItems />
            <VideoItems />
            <VideoItems />
            <VideoItems />
            <VideoItems />
        </div>
    );
}

export default Items;
