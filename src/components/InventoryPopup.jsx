
import { useState, useEffect } from 'react'

import '../styles/inventory.css'
import Modal from '../hooks/Modals'

let itemsTemp
// itemsTemp = ['sword', 'chestplate', 'booties', 'golden skull of rauhl', 'bagel', '1', '2', '3', '4', '5', '6', '7']
// itemsTemp = ['sword']
// itemsTemp = []
itemsTemp = ['sword', 'chestplate', 'booties', 'golden skull of rauhl', 'bagel', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50']





function Inventory(){
    

    // function toggleSelect(item){
    //     setIsSelected('selectedItem')
    //     console.log('i was clicked', item, isSelected)

    // }

    function InventoryItem({key}){

        const [isSelected, setIsSelected] = useState('item')
        return (
        
                <div key={key} className={isSelected} >{key}</div>
            )
        
        

    }

    
    return (
        <>
        
            <div className='inventoryOverlay' > 

                <div className='inventoryStorage'>
                    {itemsTemp.map(itemTemp => <InventoryItem key={itemTemp} />)}
                </div>
                
            </div>
        
            
        </>
    )
}


export default Inventory
