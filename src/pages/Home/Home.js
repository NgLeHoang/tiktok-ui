import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import ViewVideo from '~/components/ViewVideo/ViewVideo';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <ViewVideo />
        </div>
    );
}

export default Home;
