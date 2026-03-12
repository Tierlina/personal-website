import {useState, useEffect} from 'react';


const useTypeWriter = (text: string, speed: number = 100) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeoutId = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex((prev) => prev + 1);
            }, speed);

            return () => clearTimeout(timeoutId);
        }
    }, [index, text, speed]);

    return displayedText;
};
export default useTypeWriter;