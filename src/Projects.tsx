import { ProjectsCard } from './ProjectsCard';
import {Tab} from './Tab'
import farmingImg from './assets/AotearoaFarming.png'
import ChipetteImg from './assets/chipettesChallenge.png'

const projectList = [
    {
        name: "Aotearoa Farming",
        image: farmingImg,
        description: "This project aims to educate the younger generation about farming and conservation in New Zealand. It is designed to interactively teach students the importance of keeping our waterways clean. My goal is to demonstrate the positive impact of supporting nature in our daily lives by showing how a user’s harvest improves as the local flora and fauna flourish.",
        techstack: ['javascript', 'figma'],
    },
        {
        name: "Chippete's Challenge",
        image: ChipetteImg,
        description: "Chipete’s Challenge is a top-down, level-based game. To complete each level, you must collect colored spades to smash their corresponding sandcastles. Players have the ability to record their game runs and save their progress as they go.",
        techstack: ['java'],
    }
]


export function Projects() {
    return (
        <div className='bg-lavender pb-20'>
            <Tab description="Projects" color="bg-lavender" />
            <div className='flex flex-col items-center justify-center'>
                {projectList.map((project, index) => (
                    <ProjectsCard key={index}{...project}
                    />
                ))}
            </div>
        </div>
    );
}