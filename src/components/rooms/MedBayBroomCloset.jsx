import { useState } from 'react'
import DialogueModal from '../../context/DialogueModal'
import Modal from '../../hooks/Modals'
import '../../styles/broomCloset.css'
import MainImage from '../../assets/animationGIFs/medbay_broomCloset.gif'


function MedBayBroomCloset({setScene}){
    const [isOpen, setIsOpen] = useState(false)





    return(
        <>
            <div className='invisGuyBox'> 
                
            </div>

            <div className='interactClosetBox'> 
                <img src={MainImage} className='mainImg' />
            </div>

            <div className='invisGuyFeetBox'>

            </div>
        
        
        </>
    )
}

export default MedBayBroomCloset