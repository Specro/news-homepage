import { useState } from 'react';

export default function Navigation({ links }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex items-center">
            <button className="sm:hidden" aria-label="open menu" onClick={() => setIsOpen(true)}>
                <img src="./images/icon-menu.svg" alt="open menu" />
            </button>
            <div className={`menu fixed inset-0 bg-black/50 transition-[opacity,display] duration-300 transition-discrete sm:bg-transparent sm:static sm:opacity-100 sm:block ${isOpen?'opacity-100 block':'opacity-0 hidden'}`}>
                <button className="sm:hidden absolute right-6 top-6 z-10" aria-label="close menu" onClick={() => setIsOpen(false)}>
                    <img src="./images/icon-menu-close.svg" alt="close menu" />
                </button>
                <ul className={`flex flex-col gap-6 text-lg text-very-dark-blue text-base bg-off-white h-full w-64 p-6 pt-36 transition-transform duration-500 sm:p-0 ml-auto sm:w-auto sm:text-base sm:text-dark-grayish-blue sm:gap-10 sm:flex-row sm:translate-x-0 ${isOpen?'':'translate-x-full'}`}>
                    {links.map((link, index) => (
                        <li key={index}><a href={link.url} className="hover:text-soft-red">{link.title}</a></li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}