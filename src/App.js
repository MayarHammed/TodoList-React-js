import { useState } from "react";
import "./App.css";
import { AddItems} from './Components/AddItems/AddItems'
import { ListItems } from "./Components/ListItems/ListItems";
import { datalist } from "./Data/data";

function App() {
  const [data, setData] = useState(datalist);

  // one method for delete items
  
  const DeleteItems = (id) => {
    let items = [...data];
    let i = items.findIndex((item) => item.id === id);
    items.splice(i, 1);
    setData(items);
  };

  const AddItemsList = (item) =>{
    let items = [...data]
    items.push(item)
    setData(items)
  
  } 


  // Tow method for delete items

  // const DeleteItems = (id) => {
  //   let items = [...data];
  //   let index = items.filter((item) => {
  //     return item.id !== id
  //   });
  //   setData(index)
  // };
  
  

 
  
  return (
    <div className="app">
      <p className="pp">Todo List App</p>
      <ListItems Data={data} DeleteItems={DeleteItems} />
      <AddItems AddItemsList={AddItemsList} />
    
    </div>
  );
}

export default App;
