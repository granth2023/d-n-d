import React from "react"
import InventoryList from "../../components/InventoryList/InventoryList"
import { inventoryData } from "../../data/data"


const Shop = () => {
    console.log('Inventory Data:', inventoryData)
    return ( 
        <main> 
            <h1>Shop</h1>
           <InventoryList inventory={inventoryData}/>
        </main>
    )
}

export default Shop

//are props immutable? // can you say props.prop equals something else? how do props work? 