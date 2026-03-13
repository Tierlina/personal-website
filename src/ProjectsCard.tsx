interface CardProps {
    name: string,
    image: string,
    description: string,
    techstack: string[],
}

export function ProjectsCard({ name, image, description, techstack }: CardProps) {
    return (
<div className="flex flex-col md:flex-row md:items-start items-center p-4 mb-4 w-[80vw] bg-beige border-5 rounded-lg">
            <div className="border-5 rounded-lg overflow-hidden inline-block flex-shrink-0">
                <img
                    src={image}
                    alt={name}
                    className="sm:max-w-[50vw} md:max-w-[20vw] w-auto object-contain"
                />
            </div>

<div className="flex flex-col md:pl-5 flex-1 md:max-w-[60vw] mb-8 h-full">
    <h3 className="text-2xl md:text-4xl font-bold mt-2 pb-2">{name}</h3>

    <p className="text-softblack text-l text-center bg-green border-3 rounded-xl p-20">
        {description}
    </p>

    <div className="mt-auto pt-5">
        {techstack.map((tech, index) => (
            <span
                key={index}
                className="text-xs font-mono bg-pink px-2 py-1 mr-2 rounded"
            >
                {tech}
            </span>
        ))}
    </div>
</div>

        </div>
    );
}