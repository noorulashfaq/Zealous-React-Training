import React, { useEffect, useState } from "react";
import myData from "./data";
import "./ToDo.css";

const ToDo = () => {
  const [todos, setTodos] = useState(myData);
  const [formData, setFormData] = useState({ id: "", task: "", completed: "" });

  useEffect(() => {}, [todos]);

  const deleteData = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const changeStatus = (id) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitForm = () => {
    setTodos([...todos, formData]);
    setFormData({ id: "", task: "", completed: "" });
  };

  return (
    <div className="container">
      <h1>ToDo</h1>

      <div>
        <h3>Add new task</h3>
        <div className="form-group">
          <label>ID</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            placeholder="Enter ID"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Task</label>
          <input
            type="text"
            name="task"
            value={formData.task}
            placeholder="Enter Task"
            onChange={handleChange}
          />
        </div>
        <div className="radio-group">
          <label>Completed</label>
          <input
            type="radio"
            name="completed"
            value="true"
            onChange={handleChange}
          />{" "}
          Yes
          <input
            type="radio"
            name="completed"
            value="false"
            onChange={handleChange}
          />{" "}
          No
          <button onClick={submitForm}>Add</button>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
            <th>Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((t) => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.task}</td>
              <td>{t.completed ? "Yes" : "No"}</td>
              <td className="actions">
                <button onClick={() => changeStatus(t.id)}>
                  Change status
                </button>
                <button onClick={() => deleteData(t.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDo;
