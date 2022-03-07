import { useState } from 'react';
// import './MadLibForm.css';

const MadLibForm = ({onSubmit}) => {
    const initialState = {
        noun: "",
        noun2: "",
        adjective: "",
        color: ""
    }
    const [formData, setFormData] = useState(initialState)
    const handleForm = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }

    const handleSubmit = () => {
        onSubmit(formData);
    }
    return(
        <form>
            <label>
                Noun:
                <input type="text" name="noun" value= {formData.noun} onChange={handleForm}/> <br></br>
            </label>
            <label>
                Noun2:
                <input type="text" name="noun2" value= {formData.noun2} onChange={handleForm} /> <br></br>
            </label>
            <label>
                Adjective:
                <input type="text" name="adjective" value= {formData.adjective} onChange={handleForm} /> <br></br>
            </label>
            <label>
                Color:
                <input type="text" name="color" value= {formData.color} onChange={handleForm} /> <br></br>
            </label>
            <button onClick={handleSubmit}> Get the story</button>
        </form>
    )
}

export default MadLibForm;