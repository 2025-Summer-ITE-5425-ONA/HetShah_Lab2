import GroceryList from "./components/Grocery"
import Header from "./components/header"
import { useState } from "react"
function App() {
 const [groceryList , setGroceryList] = useState([
    { id: 1, name: 'milk', quantity: 2 },
    { id: 2, name: 'bread', quantity: 1 },
    { id: 3, name: 'eggs', quantity: 12 },
    { id: 4, name: 'cheese', quantity: 1 },
    { id: 5, name: 'butter', quantity: 1 },
    { id: 6, name: 'yogurt', quantity: 4 },
    { id: 7, name: 'juice', quantity: 2 },
    { id: 9, name: 'soda', quantity: 6 },
  ]);
  const deleteItem = (id: number) => {
    setGroceryList(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="App">
      <Header title="Grocery List" total_items={groceryList.length}      />
      <GroceryList groceryList={groceryList} onDelete={deleteItem}/>
    </div>
      

  )
}

export default App
