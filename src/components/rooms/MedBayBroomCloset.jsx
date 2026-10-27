import { useState } from 'react'
import DialogueBox from '../../context/DialogueModal'
import Modal from '../../hooks/Modals'
import '../../styles/broomCloset.css'
import MainImage from '../../assets/animationGIFs/medbay_broomCloset.gif'

function MedBayBroomCloset({setScene}){



    return(
        <>
            <div className='interactClosetBox'> 

                <img src={MainImage} className='mainImg' />
            </div>
            <div 
            className='invisGuyBox'
            // onClick={handlePopupDialogueBox}
            >
            </div>
            <div
            className='invisGuyFeetBox'
            >

            </div>
        
        
        </>
    )
}

export default MedBayBroomCloset