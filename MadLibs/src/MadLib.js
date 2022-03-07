import { useRef, useState } from 'react';
import MadLibForm from './MadLibForm';
import MadLibStory from './MadLibStory';

const MadLib = () => {
    const[showForm, setShowForm] = useState(true)
    let story = useRef("");
    const onSubmit = (formData) => {
        story.current = formData.noun+" "+formData.noun2+" "+formData.adjective+" "+formData.color;
        setShowForm(false);
    }
    const restart = () => {
        setShowForm(true)
    }
    if(showForm) {
        return(
            <MadLibForm onSubmit={onSubmit}/>
        )
    }
    return (
        <MadLibStory story={story.current} restart = {restart} />
    )
    
}

export default MadLib;