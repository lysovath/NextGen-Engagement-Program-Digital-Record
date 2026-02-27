import { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import logo from '../../../assets/logo/NGB3logo.png';

export default function Header() {
    const [visible, setVisible] = useState(true);
    const lastScrollY = useRef(0);
    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const headerHeight = headerRef.current?.offsetHeight ?? 0;

            if (currentScrollY <= headerHeight) {
                setVisible(true);
                lastScrollY.current = currentScrollY;
                return;
            }

            const diff = currentScrollY - lastScrollY.current;

            if (diff > 0) {
                setVisible(false);
            } else if (diff < 0) {
                setVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header ref={headerRef} className={`header flex-between bg-gray-900 px-5 sticky top-0 z-50 transform transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="nav-wrapper flex-between max-w-7xl mx-auto w-full h-20">
                <div className="logo-wrapper">
                    <img src={logo} alt="NextGen Logo" className='w-16'/>
                </div>
                <Navbar />
            </div>
        </header>
    );
}