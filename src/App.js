import React from "react";


const initialList = [

];


function App(props) {
  const [list, setList] = React.useState(initialList);
  const [name, setName] = React.useState('');

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleAdd() {
    const newList = list.concat({ name });

    setList(newList);
  }

  function handleRemove(id) {
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
    
  }


  






  return (
    

    <div>
      
      <div>
     
        <h1> ToDoList </h1>
        <input type="text" value={name} onChange={handleChange} />
        <button type="button" onClick={handleAdd}>
          Add
        </button>
const Item = ({ list, onRemove}) => (
<li>

        <button type="button" onClick={() => handleRemove(item.id)}>
            Remove
          </button>
          </li>
          
);
      </div>
      const List = ({ list, onRemove }) => (
  

      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
          
        ))}
      </ul>
    </div>

     





  );
}
export default App;