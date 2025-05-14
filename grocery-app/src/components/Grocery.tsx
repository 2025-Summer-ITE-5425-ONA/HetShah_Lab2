type GroceryListProps = {
    groceryList: {
        id: number;
        name: string;
        quantity: number;
    }[];
    onDelete: (id: number) => void;
  };
  
  function GroceryList({ groceryList, onDelete }: GroceryListProps) {
    return (
      <ul>
        {groceryList.map(item => (
          <li key={item.id} className="flex justify-between items-center p-2 border-b">
            <span>{item.name} -- {item.quantity}</span>
            <button
              onClick={() => onDelete(item.id)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
  
  export default GroceryList;
  