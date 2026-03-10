import { Container } from '@mantine/core';
import Tab from './Tab';

export function About() {
  return (
    <section id="about">
      <Container className="h-screen bg-green">
        <div>
          <Tab description="About me" color="bg-green"/>
        </div>

        <div className="flex flex-col items-center justify-center h-[50vh]">
          <h2 className="text-center">
            I am a software developer with a passion for creating beautiful and functional web applications.
            I have experience with a variety of programming languages and frameworks, and I am always eager to learn new technologies and improve my skills.
          </h2>
        </div>
      </Container>
    </section>
  );
}