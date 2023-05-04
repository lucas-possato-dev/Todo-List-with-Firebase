import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Todo from "./components/Todo";
import { db } from "./firebase";
import {
  query,
  collection,
  onSnapshot,
  doc,
  updateDoc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

function App() {
  const [todos, setTodos] = React.useState([]);
  const [input, setInput] = React.useState("");

  const createTodo = async (event) => {
    event.preventDefault();
    if (input.length === 0) {
      alert("Input cannot be blank");
      return;
    }
    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    });
    setInput("");
  };

  React.useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe;
  }, []);

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <div className="h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]">
      <div className="bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4">
        <h3 className="text-3xl font-bold text-center text-gray-800 p-2">
          Todo App
        </h3>
        <form onSubmit={createTodo} className="flex justify-between">
          <input
            value={input}
            onChange={({ target }) => setInput(target.value)}
            type="text"
            placeholder="Add Todo"
            className="border p-2 w-full text-xl"
          />
          <button className="border p-4 ml-2 bg-purple-500 text-slate-100">
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
        {todos.length < 1 ? null : (
          <p className="text-center p-2">{`You have ${todos.length} todos`}</p>
        )}
      </div>
    </div>
  );
}

export default App;
