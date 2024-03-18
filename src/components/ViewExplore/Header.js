import classNames from 'classnames/bind';
import { useState, useRef, useEffect } from 'react';
import styles from './ViewExplore.module.scss';
import Button from '~/components/Button';
import { ScrollToRightIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Header() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const categoryRef = useRef(null);

    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);

    useEffect(() => {
        const categoryContainer = categoryRef.current;
        const containerWidth = categoryContainer.clientWidth;
        const contentWidth = categoryContainer.scrollWidth;
        const maxScroll = contentWidth - containerWidth;

        setShowLeftButton(scrollPosition > 0);
        setShowRightButton(scrollPosition < maxScroll);
    }, [scrollPosition]);

    const handleScroll = (scrollOffset) => {
        const newScrollPosition = scrollPosition + scrollOffset;
        setScrollPosition(newScrollPosition);
        categoryRef.current.scrollLeft = newScrollPosition;
    };

    const categoryNames = [
        'Singing & Dancing',
        'Comedy',
        'Sports',
        'Anime & Comics',
        'Relationship',
        'Shows',
        'Lipsync',
        'Daily Life',
        'Beauty Care',
        'Games',
        'Society',
        'Outfit',
        'Cars',
        'Food',
        'Animals',
        'Family',
        'Drama',
        'Fitness & Heath',
        'Education',
        'Technology',
    ];

    return (
        <div className={cx('header-container')}>
            <div ref={categoryRef} className={cx('header-items')}>
                {categoryNames.map((name, index) => (
                    <Button key={index} category className={cx('category-btn', index === 0 && 'active')}>
                        <span className={cx('category-name')}>{name}</span>
                    </Button>
                ))}
            </div>
            {showLeftButton && (
                <div className={cx('btn-arrow-container')}>
                    <div className={cx('btn-left')} onClick={() => handleScroll(-400)}>
                        <ScrollToRightIcon />
                    </div>
                    <div className={cx('btn-shadow-left')}></div>
                </div>
            )}
            {showRightButton && (
                <div className={cx('btn-arrow-container')}>
                    <div className={cx('btn-right')} onClick={() => handleScroll(400)}>
                        <ScrollToRightIcon />
                    </div>
                    <div className={cx('btn-shadow-right')}></div>
                </div>
            )}
        </div>
    );
}

export default Header;
