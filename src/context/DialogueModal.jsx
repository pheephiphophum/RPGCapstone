import { useState } from 'react'
import dialogueBorder from '../assets/GUI/dialogueBorder.png'
import Modal from '../hooks/Modals'
import '../styles/broomCloset.css'

const lines = [
    "Oh. I'm sorry, I wasn't expecting someone to...",
    "Wait, Who are you? ...WHAT are you?",
    "Haha your mom."
]

function DialogueModal(){
    const [isOpen, setIsOpen] = useState(false)
    const [lineIndex, setLineIndex] = useState(false)


    // const options = [
    //     {Label: "I am of a superior race.", onSelect: () => {}  }
    // ]


    function handleDialogueBox(){
        if (!isOpen){
            setLineIndex(0)
            setIsOpen(true)
        }

    }

    function nextLine() {
        setLineIndex(prev => prev + 1)
    }

    const isLastLine = lineIndex === lines.length - 1



    return(
        <>
            <div className='doctorDialogueScene' onClick={handleDialogueBox}>

                {isOpen && 
                    <div className='dialogueBox'> 
                        <p>{lines[lineIndex]}</p>
                        <img src={dialogueBorder} className='boxImg'/>

                        {!isLastLine &&
                            <button onClick={nextLine}>▶</button>}

                    </div>}

                        {isLastLine &&
                        <div className="options">
                            {options.map((option, index) =>
                                <button key={index} onClick={option.onSelect}>
                                    {option.label}
                                </button>
                            )}
                        </div>}
            </div>
        </>
    )
}

export default DialogueModal