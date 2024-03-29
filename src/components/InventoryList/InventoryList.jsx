const InventoryList = (props) => {
    return (
      <div>
        <h2>{props.title}</h2>
        <ul>
          {props.inventory.map((item) => (
            <li key={item._id}>
              <p>{item.name}</p>
              <p>Cost: {item.cost}</p>
  
              {props.handleAddItem
                ? <button>Add Item</button>
                : <button>Remove Item</button>
              }
  
            </li>
          ))}
        </ul>
      </div>
    )
  }
  
  export default InventoryList

