import React, { useEffect, useRef, useState } from 'react';
import { Anchor, Box, Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { motion } from 'framer-motion';
import Sticky from 'react-stickynode';

const mainLinks = [
  { link: '/', label: 'Intro' },
  { link: '#about', label: 'About' },
  { link: '#skills', label: 'Skills' },
  { link: '#', label: 'Projects' },
  { link: '#', label: 'Contact' },
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
    const changeColor = () => setScrolled(window.scrollY >= 80);
    window.addEventListener('scroll', changeColor);
    changeColor();
    return () => window.removeEventListener('scroll', changeColor);
  }, []);

  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(0);

  const mainItems = mainLinks.map((item, index) => {
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
            className={`border-b-4 border-dark-green rounded-xl transition-all duration-300 ease-in-out ${hovered ? 'w-full' : 'w-0'} ${isActive ? 'w-full' : ''}`}
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
      <header className={`fixed top-0 left-0 right-0 z-50 ${scrolled ? 'top--10px rounded-t-sm rounded-xl border-t-0 border-soft-black border-5 bg-beige transition-all duration-100 ease-in-out' : 'bg-transparent border-t-0 border-transparent border-5'}`}>
        <Container className="h-20 flex items-center justify-between">
          <Box className="hidden sm:flex flex-col justify-between h-20 pt-4" visibleFrom="sm">
            <Group gap={0} justify="flex-end" className="flex gap-0 justify-end">
              {mainItems}
            </Group>
          </Box>

          <Burger
            opened={opened}
            onClick={toggle}
            className="sm:hidden"
            size="md"
            hiddenFrom="sm"
            aria-label="Toggle navigation"
          />
        </Container>
      </header>
    </Sticky>

  );
}