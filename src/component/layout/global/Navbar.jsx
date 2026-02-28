import { useEffect, useState } from 'react'
import useScrollTo from '../../../hooks/useScrollTo';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const scrollTo = useScrollTo();

    useEffect(() => {
        const handleScroll = () => {
            setOpen(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 1024px)');
        const handleBreakpointChange = (event) => {
            if (event.matches) {
                setOpen(false);
            }
        };
        if (mediaQuery.matches) {
            setOpen(false);
        }
        mediaQuery.addEventListener('change', handleBreakpointChange);
        return () => {
            mediaQuery.removeEventListener('change', handleBreakpointChange);
        };
    }, []);

    const handleClick = () => {
        setOpen((prev) => !prev);
    }
    return (
        <nav className="lg:flex lg:h-20 lg:flex-center">
            <div className="lg:hidden">
                <button id="menu-btn" className="text-white focus:outline-none p-2" onClick={handleClick}>
                    <svg id="hamburger-icon" className={`${open ? 'hidden' : 'block'} w-8 h-8`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                    <svg id="close-icon" className={`${open ? 'block' : 'hidden'} w-8 h-8`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <ul className={`hidden lg:flex nav-links lg:flex-between lg:gap-6 h-full`}>
                <li className="h-full flex-center px-5"><a className="hover:text-orange-500 hover:cursor-pointer" onClick={() => scrollTo("home")}>Home</a></li>
                <li className="h-full flex-center px-5"><a className="hover:text-orange-500 hover:cursor-pointer" onClick={() => scrollTo("about")}>About Program</a></li>
                <li className="h-full flex-center px-5"><a className="hover:text-orange-500 hover:cursor-pointer" onClick={() => scrollTo("journey")}>Journey</a></li>
                <li className="h-full flex-center px-5"><a className="hover:text-orange-500 hover:cursor-pointer" onClick={() => scrollTo("people")}>Our People</a></li>
                <li className="h-full flex-center px-5"><a className="hover:text-orange-500 hover:cursor-pointer" onClick={() => scrollTo("timeline")}>Timeline</a></li>
                <li className="h-full flex-center px-5"><a className="hover:text-orange-500 hover:cursor-pointer" onClick={() => scrollTo("gallery")}>Gallery</a></li>
            </ul>
            <ul className={`nav-links ${open ? 'flex' : 'hidden'} flex-col gap-3 fixed top-0 right-0 z-50 lg:hidden bg-gray-900 translate-y-20`}>
                <li className="hover:bg-orange-500 flex-center px-5 py-2" onClick={() => scrollTo("home")}><a>Home</a></li>
                <li className="hover:bg-orange-500 flex-center px-5 py-2" onClick={() => scrollTo("about")}><a>About Program</a></li>
                <li className="hover:bg-orange-500 flex-center px-5 py-2" onClick={() => scrollTo("journey")}><a>Journey</a></li>
                <li className="hover:bg-orange-500 flex-center px-5 py-2" onClick={() => scrollTo("people")}><a>Our People</a></li>
                <li className="hover:bg-orange-500 flex-center px-5 py-2" onClick={() => scrollTo("timeline")}><a>Timeline</a></li>
                <li className="hover:bg-orange-500 flex-center px-5 py-2" onClick={() => scrollTo("gallery")}><a>Gallery</a></li>
            </ul>
        </nav>
    );
}