
import { useState, useEffect } from 'react'

import '../styles/inventory.css'
import Modal from '../hooks/Modals'





function InventoryItem({ item }){

    

    function toggleSelect(){
        setIsSelected(!isSelected)


    }

    const [isSelected, setIsSelected] = useState(false)
    return (
    
            <div className={isSelected ? 'selectedItem' : 'item'} onClick={toggleSelect} >{item}</div>
        )
    
}



function Inventory(){
    
    let items = []




    
    return (
        <>
        
            <div className='inventoryOverlay' > 

                <div className='inventoryStorage'>
                    {items.map(item => <InventoryItem key={item} item={item} />)}
                </div>
                
            </div>
        
            
        </>
    )
}





export default Inventory
