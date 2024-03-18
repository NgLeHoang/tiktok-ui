import classNames from 'classnames/bind';
import styles from './Explore.module.scss';
import ViewExplore from '~/components/ViewExplore/ViewExplore';

const cx = classNames.bind(styles);

function Explore() {
    return (
        <div className={cx('wrapper')}>
            <ViewExplore />
        </div>
    );
}

export default Explore;
