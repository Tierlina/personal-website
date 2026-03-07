import { Container, Divider, Group, Text } from '@mantine/core';
import './index.css';
import useTypeWriter from './useTypeWriter';

export function UserButton() {
  const displayedName = useTypeWriter("Tierlina Payne", 100);


  return (
    <div>
      <div className='flex flex-col flex-start items-center h-[50vh] max-w-[900px] w-[90vw] rounded-lg border-5 bg-lavender'>
        <h1 className='font-bold'>Hello</h1>
        <h2 className='text-2xl pb-4'>my name is:</h2>
        <div className='flex items-center justify-center bg-beige  h-[60%] max-w-[720px] w-[80vw] px-[15vw] rounded-lg border-4 border-softblack'>
          <h1 className='font-mono flex flex-col text-center  justify-center font-bold text-4xl '>{displayedName}</h1>

        </div>
      </div>
      <h2 className='flex items-center justify-center text-2xl pt-4'>and I am a software developer.</h2>
    </div>
  );
}