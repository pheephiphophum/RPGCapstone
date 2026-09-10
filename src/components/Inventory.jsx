import { useState, useEffect } from 'react'

import '../styles/inventory.css'


const itemsTemp = ['sword', 'chestplate', 'booties', 'golden skull of rauhl', 'bagel', '1', '2', '3', '4', '5', '6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', 'really really long name that doesnt fit inside the box so i need to figure out what to do with it']

function Inventory(){

    console.log(itemsTemp)
    return(
        <>
            <div className='inventoryOverlay' > 
                {itemsTemp.map((itemsTemp) => ( 
                    <div key={itemsTemp} className='item'>{itemsTemp}</div>
                ))}
            </div>
        </>
    )
}

// function InventoryToggle(){
//     if()
// }


export default Inventory