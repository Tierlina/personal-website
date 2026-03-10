import Tab from './Tab'
import SkillsCard from './SkillsCard'
import type { label } from 'framer-motion/client';


const skillCategories = [
  {
    title: "Software",
    skills: [
      { name: "Kotlin", image: "" },
      { name: "Java", image: "" },
      { name: "Python", image: "" },   
      { name: "Typescript", image: "" },  
      {name: "HTML/CSS", image: ""},
      {name: "React", image: ""}

    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", image: "" },
      { name: "Splunk", image: "" },
    ],
  },
  {
    title: "Design",
    skills: [
      { name: "Figma", image: "" },
      { name: "User Research", image: "" },
      { name: "Design Principles", image: "" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills">
      <div className="min-h-screen bg-beige">
        <Tab description="Skills" color="bg-beige" />

        <div className="space-y-10 mt-8">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h2 className="text-xl font-semibold mb-4">
                {category.title}
              </h2>

              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, index) => (
                  <SkillsCard
                    key={index}
                    image={skill.image}
                    name={skill.name}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}