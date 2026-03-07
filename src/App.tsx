import { useEffect, useState } from 'react'

import { UserButton } from './UserButton'
import {MantineProvider, createTheme} from '@mantine/core'
import type { MantineColorsTuple } from '@mantine/core'
import { Info } from './Info'
import {DoubleHeader} from './DoubleHeader'
import SmallHeaderLayout from './SmallHeaderLayout'
import useWindowWidth from './UseWindowWidth'

const myColors : MantineColorsTuple = [
  '#F5F5ED',
  '#CAEEDB',
  '#80e2ae',
  '#F3CFE0',
  '#FF97C8',
  '#C8C8F0',
  '#9797FF',
  '#525049',
  '#F5F5ED',
  '#CAEEDB',
];

const myTheme = createTheme({
  colors: {
    myColor: myColors,
  },
  primaryColor: 'myColor',
});


function App() {
  const windowWidth = useWindowWidth();
  const isSmallScreen = windowWidth < 768; 

  return (
    <MantineProvider >
      <div className="bg-beige">
            <div className=" min-h-screen">
      {isSmallScreen ? <SmallHeaderLayout /> : <DoubleHeader />}  
      <div className="flex items-center justify-center h-[90vh]">
        <UserButton />
      </div>
      <Info/>
    </div>
      </div>

    </MantineProvider>


  )
}


export default App
// function setWindowSize(arg0: { width: number; height: number }) {
//   throw new Error('Function not implemented.')
// }

