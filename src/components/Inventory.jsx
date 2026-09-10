import '../styles/inventory.css'
import '../styles/roomOne.css'


const itemsTemp = ['sword', 'chestplate', 'booties', 'golden skull of rauhl', 'bagel']

function Inventory(){
    return(
        <>
            <div id="" className="interactBox">
                <ul>
                    {itemsTemp.map((itemsTemp) => ( 
                        <div key={itemsTemp} className='item'>{itemsTemp}</div>
                    ))}
                </ul>
            </div>
        </>
    )
}