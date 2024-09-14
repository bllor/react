import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos((currentArray) => [toDo, ...toDos]);
  };
  console.log(toDos);

  return (
    <div>
      <h1>My ToDos : {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do "
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
