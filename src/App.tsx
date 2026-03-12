import { Skills } from './Skills'
import {Projects} from './Projects'
import {Contact} from './Contact'
import { UserButton } from './UserButton'
import { MantineProvider} from '@mantine/core'
import { About } from './About'
import { DoubleHeader } from './DoubleHeader'
import SmallHeaderLayout from './SmallHeaderLayout'
import useWindowWidth from './UseWindowWidth'



function App() {
  const windowWidth = useWindowWidth();
  const isSmallScreen = windowWidth < 768;

  return (
    <MantineProvider >
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className="bg-beige w-screen">
        <div className=" min-h-screen">
          {isSmallScreen ? <SmallHeaderLayout /> : <DoubleHeader />}
          <div className="flex items-center justify-center h-[90vh]">
            <UserButton />
          </div>

        </div>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>

    </MantineProvider>


  )
}


export default App
// function setWindowSize(arg0: { width: number; height: number }) {
//   throw new Error('Function not implemented.')
// }

