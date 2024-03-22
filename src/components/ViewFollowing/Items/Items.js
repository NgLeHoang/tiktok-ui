import classNames from 'classnames/bind';
import styles from './Items.module.scss';
import Video from './Video';

const cx = classNames.bind(styles);

function Items() {
    return (
        <div className={cx('wrapper')}>
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
        </div>
    );
}

export default Items;
