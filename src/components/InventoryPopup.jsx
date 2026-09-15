import { useState, useEffect } from 'react'

import '../styles/inventory.css'

let itemsTemp
// itemsTemp = ['sword', 'chestplate', 'booties', 'golden skull of rauhl', 'bagel', '1', '2', '3', '4', '5', '6', '7']
// itemsTemp = ['sword']
// itemsTemp = []
itemsTemp = ['sword', 'chestplate', 'booties', 'golden skull of rauhl', 'bagel', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50']

const craftsTemp = [{
        item: 'stick',
        ingredients: [[2, 'twig'], [1, 'duct tape']]
    }, {
        item: 'sword',
        ingredients: [[2, 'stick'], [3, 'steel sheet']]
    }]

function Inventory({style}){

    const craftsList = craftsTemp 



    
    return(
        <>
            
            <div className='inventoryOverlay'  style={style}> 
                <div className='craftingMenu'>
                    <p>crafting menu</p>
                </div>

                <div className='inventoryStorage'>
                    {itemsTemp.map((itemsTemp) => ( 
                        <div key={itemsTemp} className='item'>{itemsTemp}</div>
                    ))}
                </div>
                
            </div>
        </>
    )
}


export default Inventory
