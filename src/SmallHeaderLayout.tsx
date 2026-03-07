import { TbMenu } from "react-icons/tb";
import { useEffect, useState } from "react";
import Sticky from 'react-stickynode';

const mainLinks = [
    { link: '#', label: 'Intro' },
    { link: './info.tsx', label: 'About' },
    { link: '#', label: 'Skills' },
    { link: '#', label: 'Projects' },
    { link: '#', label: 'Contact' },
];


export default function SmallHeaderLayout() {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    const mainItems = mainLinks.map((item, index) => {
        return (
            <a href={item.link} key={item.label} className='px-3 py-2 rounded color-softblack transition-colors duration-150 focus:outline-none'>
                {item.label}
            </a>
        );
    });
    return (
        <div>
            <Sticky enabled={true} top={0} innerZ={1000} activeClass="sticky-header">
                <button className="p-2" onClick={handleToggle}>
                    {open ? 'Close' : <TbMenu className='text-2xl text-softblack' />}
                </button>

                {open && (
                    <header className="flex flex-col items-center">
                        {mainItems}
                    </header>
                )}
            </Sticky>
        </div>
    );
}
