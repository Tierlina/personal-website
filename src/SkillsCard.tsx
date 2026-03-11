interface CardProps {
    name :string;
    icon : React.ReactNode;
}

export default function SkillsCard({ name, icon }: CardProps) {
  return (
    <div className="flex flex-col justify-center items-center border-5 border-softblack w-[100px] h-[60px] sm:min-w-[140px] sm:min-h-[80px] lg:min-w-[200px] lg:min-h-[120px] rounded-lg 
                    transition-colors duration-200
                    hover:bg-pink hover:border-dark-pink hover:text-dark-pink ">
      {icon}
      <h4 className ="text-l sm:text-2xl lg:text-2xl font-bold">{name}</h4>
    </div>
  )
}