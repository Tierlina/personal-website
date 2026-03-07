import { Anchor, Box, Burger, Container, Group } from '@mantine/core';
import Tab from './tab.tsx';

export function Info() {
    const tabDescription = Tab({ description: 'About me' });
    return (
        <div>
            <Container className=' h-screen bg-lavender'>
                <div className='flex pl-5 bg-beige'>
                                    {tabDescription}
                </div>
                <div className = 'flex flex-col items-center justify-center h-[80vh]'>
                        <h1 className='text-center'>I am a software developer with a passion for creating beautiful and functional web applications.
                    I have experience with a variety of programming languages and frameworks, and I am always eager to learn new technologies and improve my skills.
                </h1>
                </div>

            </Container>
        </div>

    )
}
