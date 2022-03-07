const MadLibStory = ({story, restart}) => {
    return (
        <div>
            <h1>{story}</h1>
            <button onClick={restart}>restart</button>
        </div>
    )
}

export default MadLibStory;