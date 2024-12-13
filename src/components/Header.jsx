import React, { useState } from 'react';

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (darkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    };

    return (
        <div className="p-5 bg-primary flex justify-between items-center">
            <h1 className="text-secondary text-4xl sm:text-2xl font-semibold"> JB </h1>
            <div onClick={toggleDarkMode} className="flex gap-1 cursor-pointer">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
            </div>
        </div>
    );
};

export default Header;