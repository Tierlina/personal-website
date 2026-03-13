import { Container } from '@mantine/core';
import {Tab} from './TabComponent';
import Tierlina from './assets/Tierlina.png'

export function About() {
  return (
    <section id="about">
      <Container className=" bg-green">
        <div className='h70'/>
        <div>
          <Tab description="About" color="bg-green" />
        </div>

        <div className="flex flex-col md:flex-row  ml-[10vw] md:ml-[5vw]">
          <img src={Tierlina} className='size-60 border-5 rounded-xl' />
          <div className=" mb-20 text-center text-xl w-[80vw] md:w-[60vw] md:ml-[10vw] mt-[10vw] md:mt-0 p-[5vw] bg-pink border-5 rounded-xl">
I am a software developer driven by the intersection of clean code and human impact. While I’m experienced across various stacks, my true strength lies in the "soft" side of hard tech: organization, seamless collaboration, and high-level communication. <br/><br/>

With a background in science communication, I have a unique ability to dissect complex technical concepts and translate them for any audience. I don't just build features; I ensure the why behind them is clear to stakeholders and teammates alike. <br/><br/>

When I’m not at my desk, I’m usually refining my creative eye through drawing, keeping the rhythm on bass guitar, or practicing team dynamics on the volleyball court. I’m a firm believer that a well-played collaborative board game is the best way to sharpen one's problem-solving skills. 
          </div>
        </div>
      </Container>
    </section>
  );
}