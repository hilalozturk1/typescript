import React from "react";

type IProps = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTodo: () => void;
};

const Input: React.FC<IProps> = ({ todo, setTodo, addTodo }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default Input;
