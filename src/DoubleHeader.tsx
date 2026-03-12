import React, { useEffect,  useState } from 'react';
import { Anchor, Box, Burger, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { motion } from 'framer-motion';
import Sticky from 'react-stickynode';

const mainLinks = [
  { link: '#intro', label: 'Intro' },
  { link: '#about', label: 'About' },
  { link: '#skills', label: 'Skills' },
  { link: '#projects', label: 'Projects' },
  { link: '#contact', label: 'Contact' },
];

const extraLinks = [
  { link: '#', label: 'Resume' },
  { link: '#', label: 'Github' },
  { link: '#', label: 'Linkedin' },
];

export function DoubleHeader() {

  // track whether page is scrolled to change header background via Tailwind classes
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY + 180; // offset for header height

    mainLinks.forEach((item, index) => {
      const section = document.querySelector(item.link);

      if (section) {
        const top = (section as HTMLElement).offsetTop;
        const height = (section as HTMLElement).offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActive(index);
        }
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  useEffect(() => {
    const changeColor = () => setScrolled(window.scrollY >= 80);
    window.addEventListener('scroll', changeColor);
    changeColor();
    return () => window.removeEventListener('scroll', changeColor);
  }, []);

  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(0);

  const mainItems = mainLinks.map((item, index) => {
    const isActive = index === active;
    const base = 'relative text-xl inline-block px-3 py-2 rounded color-softblack transition-colors duration-150 focus:outline-none';
    const hover = ' rounded-xl transition-all duration-300 ease-in-out';
    const activeCls = '  rounded-xl';
    function HoverLink({ href, children }: { href: string; children: React.ReactNode }) {
      const [hovered, setHovered] = useState(false);
      return (
        <motion.a
          href={href}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          onClick={(event) => {
            event.preventDefault();
            setActive(index);

            const element = document.querySelector(item.link);
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className={`${base} ${hover} ${isActive ? activeCls : 'bg-transparent'}`}
        >
          {children}
          <div
            className={`border-b-4 border-dark-pink rounded-xl transition-all duration-300 ease-in-out ${hovered ? 'w-full' : 'w-0'} ${isActive ? 'w-full' : ''}`}
          />
        </motion.a>
      );
    }

    return (
      <div key={item.label}>
        <HoverLink href={item.link}>
          {item.label}
        </HoverLink>
      </div>
    );
  });

  const extraItems = extraLinks.map((item, index) => {
    const isActive = index === active;
    const base = 'relative inline-block px-3 py-2 rounded color-softblack transition-colors duration-150 focus:outline-none';
    const hover = ' rounded-xl transition-all duration-300 ease-in-out';
    const activeCls = ' border-dark-green rounded-xl';
    function HoverLink({ href, children }: { href: string; children: React.ReactNode }) {
      const [hovered, setHovered] = useState(false);
      return (
        <motion.a
          href={href}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          onClick={(event) => {
            event.preventDefault();
            setActive(index);

            const element = document.querySelector(item.link);
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className={`${base} ${hover} ${isActive ? activeCls : 'bg-transparent'}`}
        >
          {children}
          <div
            className={`border-b-4 border-transparent rounded-xl transition-all duration-300 ease-in-out ${hovered ? 'w-full' : 'w-0'} ${isActive ? 'w-full' : ''}`}
          />
        </motion.a>
      );
    }

    return (
      <div key={item.label}>
        <HoverLink href={item.link}>
          {item.label}
        </HoverLink>
      </div>
    );
  });



  return (
    <Sticky enabled={true} top={0} innerZ={1000}>
      <header className={`flex flex-row fixed top-0 left-0 right-0 z-50 hidden sm:flex flex-row h-20 ${scrolled ? 'top--10px rounded-t-sm rounded-xl border-t-0 border-soft-black border-5 bg-beige transition-all duration-100 ease-in-out' : 'bg-transparent border-t-0 border-transparent border-5'}`}>


            <Group justify='space-between' w='100%' className='flex flex-row pt-4'>
            <Group className='flex flex-row'>
              {mainItems}
            </Group>
            <Group ml='auto' className='flex flex-row'>
              {extraItems}
            </Group>              
            </Group>




          <Burger
            opened={opened}
            onClick={toggle}
            className="sm:hidden"
            size="md"
            hiddenFrom="sm"
            aria-label="Toggle navigation"
          />


      </header>
    </Sticky>

  );
}