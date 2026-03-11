
interface CardProps {
    name: string,
    image: string,
    description: string,
    techstack: string[],
}

export function ProjectsCard({ name, image, description, techstack }: CardProps) {
    return (
        <div className="border-5 p-4 rounded-lg mb-4 shadow-sm bg-beige">
            <img src={image} alt={name} className="h-full w-full h-48 object-cover rounded border-5" />
            <h3 className="text-xl font-bold mt-2">{name}</h3>
            <p className="text-gray-600">{description}</p>
            <div className="mt-2">
                {techstack.map((tech, index) => (
                <span
                    key={index}
                    className="text-xs font-mono bg-pink px-2 py-1 mr-2 rounded">
                        {tech}
                </span>
                ))
                }

            </div>
        </div>
    );

}