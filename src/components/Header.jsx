import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';  

const Header = (books) => {
    const location = useLocation();

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [books]);

    // Function to determine if the NavLink should be active
    const getNavLinkClass = (path) => {
        // For the "Books" link, check if the current path starts with /detail or is /books
        if (path === '/books') {
            return location.pathname.startsWith('/detail') || location.pathname === '/books' ? 'font-bold text-white' : 'text-white';
        }
        // For the "Home" link, check if the current path is exactly '/'
        if (path === '/') {
            return location.pathname === '/' ? 'font-bold' : 'text-white';
        }
        // Default case for other links
        return location.pathname === path ? 'font-bold' : 'text-white';
    };

    return (
        <div className="min-w-[800px] mx-auto"> 
            <nav className={`flex justify-between items-center p-4 shadow-md dark:bg-zinc-900 ${isScrolled ? 'blur' : ''}`}>
                <div className="flex justify-start gap-4">
                    <NavLink to="/" className={() => getNavLinkClass('/')}>Home</NavLink>
                    <NavLink to="/books" className={() => getNavLinkClass('/books')}>Books</NavLink>
                </div>
            </nav> 
        </div>
    );
};

export default Header;
