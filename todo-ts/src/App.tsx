import Input from "./components/Input";
import { useState } from "react";
import { Todos } from "./types/Type";
import Message from "./components/Message";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>([]);
  console.log(todos);

  const addTodo = () => {
    if (todo) setTodos([...todos, { message: todo, id: todos.length + 1 }]);
    setTodo("");
  };
  const deleteMessage = (id: number) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <Input todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <Message todos={todos} deleteMessage={deleteMessage} />
    </div>
  );
};

export default App;
