import { useState, useEffect } from 'react'

import '../styles/inventory.css'


const itemsTemp = ['sword', 'chestplate', 'booties', 'golden skull of rauhl', 'bagel', '1', '2', '3', '4', '5', '6', '7']

const craftsTemp = [{
        item: 'stick',
        ingredients: [[2, 'twig'], [1, 'duct tape']]
    }, {
        item: 'sword',
        ingredients: [[2, 'stick'], [3, 'steel sheet']]
    }]

function Inventory({style}){
    console.log(craftsTemp)

    
    return(
        <>
            <div className='craftingMenu'>
                
                
                
                {/* {craftsTemp.map((craftsTemp) => (
                    <div key={craftsTemp.item} className='craft'>
                        {craftsTemp.item} <div className='ingridients'>{craftsTemp.ingredients.map((craftsTemp.ingredients) => (
                            <p className='ingridient'>{craftsTemp.ingredients[0]} {craftsTemp.ingredients[1]}</p>
                        ))}
                        </div>
                    </div>
                ))} */}
            </div>
            <div className='inventoryOverlay' style={style}> 
                {itemsTemp.map((itemsTemp) => ( 
                    <div key={itemsTemp} className='item'>{itemsTemp}</div>
                ))}
            </div>
        </>
    )
}


export default Inventory
