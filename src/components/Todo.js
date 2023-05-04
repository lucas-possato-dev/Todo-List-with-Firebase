import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li
      className={
        todo.completed
          ? "flex justify-between bg-slate-400 p-4 capitalize my-2"
          : "flex justify-between bg-slate-200 p-4 capitalize my-2"
      }
    >
      <div className="flex">
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.completed ? "checked" : ""}
        />
        <p
          onClick={() => toggleComplete(todo)}
          className={
            todo.completed
              ? "ml-2 cursor-pointer line-through"
              : "ml-2 cursor-pointer"
          }
        >
          {todo.text}
        </p>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="cursor-pointer flex items-center"
      >
        <FaRegTrashAlt />
      </button>
    </li>
  );
};

export default Todo;
