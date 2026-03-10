interface CardProps {
    name :string;
    image : string;
}

export default function skillsCard({name, image} : CardProps) {
    return (
        <div>
            <img src = {image}/>
            <h4>{name}</h4>
        </div>
    )
}