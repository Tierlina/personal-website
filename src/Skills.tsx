import Tab from './Tab'
import SkillsCard from './SkillsCard'
import { FaRegEye, FaGitAlt, FaReact, FaJava, FaPython, FaHtml5 } from "react-icons/fa"
import { SiFigma, SiVite, SiKotlin, SiTypescript, SiSplunk } from "react-icons/si"
import { motion } from 'framer-motion';



const skillCategories = [
  {
    title: "Software",
    skills: [
      { name: "Kotlin", icon: SiKotlin },
      { name: "Java", icon: FaJava },
      { name: "Python", icon: FaPython },
      { name: "Typescript", icon: SiTypescript },
      {name: "HTML/CSS", icon: FaHtml5},
      {name: "React", icon: FaReact},
      {name: "Vite", icon: SiVite},

    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "Splunk", icon: SiSplunk },
      { name: "Figma", icon: SiFigma },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills">
      <div className=" bg-beige">
        <Tab description="Skills" color="bg-beige" />

        <div className="flex flex-col mt-8 space-y-10 mb-[10vw]">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h2 className="text-xl font-semibold mb-4 ml-10 md:text-2xl lg:text-3xl">
                {category.title}
              </h2>

              <div className="flex flex-wrap justify-center gap-5 md:gap-10  ">
                {category.skills.map((skill) => {
                  const Icon = skill.icon
                  return (
                    <motion.a
                      key={skill.name}
                      whileHover={{ scale: 1.1 }}
                      className="group"
                    >
                      <SkillsCard
                        name={skill.name}
                        icon={<Icon className="text-xl md:text-4xl lg:text-6xl text-black group-hover:text-dark-pink" />} />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}