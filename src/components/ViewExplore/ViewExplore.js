import classNames from 'classnames/bind';
import styles from './ViewExplore.module.scss';
import Header from './Header';
import Video from './Video/Video';

const cx = classNames.bind(styles);
function ViewExplore() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Video />
        </div>
    );
}

export default ViewExplore;
