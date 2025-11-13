import React, { useState, useEffect } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTodos([
        { id: 1, text: "Learn React" },
        { id: 2, text: "Build Projects" },
        { id: 3, text: "Practice Daily" },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  const addTodo = () => {
    if (newTodo.trim() === "") {
      setError("Todo cannot be empty!");
      return;
    }
    const newTask = { id: Date.now(), text: newTodo };
    setTodos([...todos, newTask]);
    setNewTodo("");
    setError(null);
  };

  const removeTodo = (id) => {
    const updated = todos.filter((t) => t.id !== id);
    setTodos(updated);
    if (updated.length === 0) {
      setError("All todos removed! No tasks left.");
    }
  };

  if (loading) {
    return <p>Loading…</p>;
  }

  return (
    <div>
      
      {error && <p style={{ color: "red" }}>{error}</p>}
      {todos.length === 0 && !error && (
        <p style={{ color: "red" }}>No todos found!</p>
      )}

      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter new todo"
      />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}{" "}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
