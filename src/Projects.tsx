import { ProjectsCard } from './ProjectsCard';
import Tab from './Tab'
import farmingImg from './assets/AotearoaFarming.png'

const projectList = [
    {
        name: "Aotearoa Farming",
        image: farmingImg,
        description: "sypnopsis",
        techstack: ['javascript', 'figma'],
    }
]


export function Projects() {
    return (
        <div className='bg-lavender'>
            <Tab description="Projects" color="bg-lavender" />
            <div className='p-[5vw]'>
                {projectList.map((project, index) => (
                    <ProjectsCard key={index}{...project}
                    />
                ))}
            </div>
        </div>
    );
}