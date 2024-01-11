
import { useState } from 'react'
import InventoryList from "../../components/InventoryList/InventoryList"
import { inventoryData } from "../../data/data"


const Shop = () => {
    console.log('Inventory Data:', inventoryData)

    const [inventory, setInventory] = useState(inventoryData)
    const [userInventory, setUserInventory] = useState([])


    const handleAddItem = () => {
        setInventory([])
    }
    return ( 
        <main> 
            <h1>Shop</h1>
            <section>
            <button onClick={handleAddItem}>Click Here</button>
           <InventoryList title="Shop Inventory" inventory={inventoryData}/>
           <Inventory List title="User Inventory" inventory={userInventory}/>
           </section>
        </main>
    )
}

export default Shop

//are props immutable? // can you say props.prop equals something else? how do props work? 

//how do you use hooks? use state is a hook? will we have other hooks? 

//how do we destructure usestate? is that extracting? are we plucking it from the react library? 

//how do we do this? what is the first hting in the array for state? what is the first? waht is the second? the name and the word set? what is this saying? what is equal to? do you call usestate like a funciotn? what do you pass? is it inventory Data? what are we technically doing? 

//when you pass things into the use state what will be the first thing in the array? 