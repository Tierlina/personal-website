import { Tab } from './TabComponent';
import { motion } from 'framer-motion';

const info = [
    {
        title: "Contact Details",
        links: [
            { link: "mailto:tierlinapayne@gmail.com", label: 'tierlinapayne@gmail.com' },
            { link: "https://linkedin.com/in/xxx", label: 'Linkedin' }
        ]
    },
    {
        title: "Based in",
        links: [
            { link: "#", label: 'Sydney, Australia' }
        ]
    }
];

const extraLinks = [
    { link: '#', label: 'Resume' },
    { link: 'https://github.com/Tierlina', label: 'Github' },
    { link: 'https://www.linkedin.com/in/tierlina-payne', label: 'Linkedin' },
];

export function Contact() {
    // Removed transition and hover-related classes
    return (
        <section id="contact" className="flex flex-col">
            <div className='bg-beige'>
                <Tab description="Contact" color="bg-beige" />
                <div className="flex flex-col items-center justify-center md:flex-row pl-[10vw] pb-[5vw] md:w-[80vw] gap-15">
                    <h1 className="text-4xl font-bold">Let's start a conversation.</h1>
                    {info.map((item, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <h3 className="font-bold text-xl">{item.title}</h3>
                            <div className="flex flex-col">
                                {item.links.map((linkItem, linkIndex) => (
                                    <a
                                        key={linkIndex}
                                        href={linkItem.link}
                                        className="cursor-pointer" // Removed hover:underline
                                    >
                                        {linkItem.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <footer className='mx-auto pt-5 pr-10 border-x-4 border-t-4 border-black rounded-t-xl text-rounded-b-none flex justify-end items-center bg-pink h-20 w-[80vw] gap-4'>
                {extraLinks.map((item) => (
                    <div key={item.label}>
                        <motion.a
                            href={item.link}
                            target={item.link.startsWith('#') ? "_self" : "_blank"}

                        >
                            {item.label}
                        </motion.a>
                    </div>
                ))}
            </footer>
        </section>
    );
}