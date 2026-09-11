import { useState, useEffect } from 'react'

import '../styles/inventory.css'


const itemsTemp = ['sword', 'chestplate', 'booties', 'golden skull of rauhl', 'bagel', '1', '2', '3', '4', '5', '6',   '7']

function Inventory({style}){


    
    return(
        <>
            <div className='inventoryOverlay' style={style}> 
                {itemsTemp.map((itemsTemp) => ( 
                    <div key={itemsTemp} className='item'>{itemsTemp}</div>
                ))}
            </div>
        </>
    )
}


export default Inventory
