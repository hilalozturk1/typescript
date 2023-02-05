import React from "react";
import { Todos } from "../types/Type";

type Props = {
  todos: Todos[];
  deleteMessage: (id: number) => void;
};

const Message: React.FC<Props> = ({ todos, deleteMessage }) => {
  return (
    <div>
      {todos.map((item) => (
        <p key={item.id}>
          {item.message}
          <button onClick={() => deleteMessage(item.id)}>Delete</button>
        </p>
      ))}
    </div>
  );
};

export default Message;
