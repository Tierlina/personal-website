import { Container } from '@mantine/core';
import { Tab } from './TabComponent';
import Tierlina from './assets/Tierlina.png'

export function About() {
  return (
    <section id="about">
      <Container className=" bg-green">
        <div className='h70' />
        <div>
          <Tab description="About" color="bg-green" />
        </div>

        <div className="flex flex-col md:flex-row  ml-[10vw] md:ml-[5vw]">
          <img src={Tierlina} className='size-60 border-5 rounded-xl' />
          <div className=" mb-20 text-center text-xl w-[80vw] md:w-[60vw] md:ml-[10vw] mt-[10vw] md:mt-0 p-[5vw] bg-pink border-5 rounded-xl">
            I’m a software developer who cares just as much about people as I do about code. I’ve worked across different stacks, but what I’m best at is staying organised, working well with others, and communicating clearly.  <br/> <br/>
            I come from a science communication background, which means I’m used to breaking down complex ideas and making them make sense to anyone. I strive to make sure everyone understands why we’re building them in the first place. <br/> <br/>
            Outside of coding, I’m usually drawing, playing bass, or on the volleyball court. I also think a good board game is one of the best ways to build problem-solving skills, and a bit of friendly competition never hurts :) .          </div>
        </div>
      </Container>
    </section>
  );
}