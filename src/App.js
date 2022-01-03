/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import react from "react";
import { useState } from "react";
import shoppingIcon from "./assets/shopping-icon.svg";
import minusIcon from "./assets/minus-icon.svg";
import plusIcon from "./assets/plus-icon.svg";
import "./App.css";
import classNames from "classnames";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    { title: "Bitcoin", count: 1 },
    { title: "Ethereum", count: 1 },
    { title: "Litecoin", count: 1 },
    { title: "Ripple", count: 1 },
    { title: "Bitcoin Cash", count: 1 },
    { title: "Cardano", count: 1 },
    { title: "Stellar", count: 1 },
    { title: "NEM", count: 1 },
    { title: "Dash", count: 1 },
    { title: "Monero", count: 1 },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      alert("Please enter a value");
      return;
    }
    const addedTodos = [...todos, { title: value, count: 1 }];

    setTodos(addedTodos);
    setValue("");
  };

  const handleAdditionCount = (index) => {
    const newTodos = [...todos];
    newTodos[index].count = newTodos[index].count + 1;
    setTodos(newTodos);
  };

  const handleSubtractionCount = (index) => {
    const newTodos = [...todos];
    newTodos[index].count = newTodos[index].count - 1;
    if (newTodos[index].count > 0) {
      newTodos[index].count = newTodos[index].count + -1;
    } else {
      newTodos.splice(index, 1);
    }
    setTodos(newTodos);
  };

  const getTotalCount = () => {
    const totalCounts = todos.reduce((total, num) => {
      return total + num.count;
    }, 0);
    return totalCounts;
  };

  return (
    <>
      <nav className="nav">
        <img className="nav-icon" src={shoppingIcon} alt="Shopping Icon" />
        <h1 className="nav-title">Your Crypto Coin</h1>
      </nav>
      <section className="container">
        <form className="form" onSubmit={handleSubmit}>
          <input
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
            className="input"
            type="text"
            placeholder="Add Coin"
          ></input>
          <button className="button" type="submit">
            <label className="label">Add</label>
          </button>
        </form>
        <hr />
        <div className="info">
          <div className="info-total">
            <p className="text1">{`Total List : ${todos.length}`}</p>
          </div>

          <div className="info-total">
            <p className="text1">{`Total Counts : ${getTotalCount()}`}</p>
          </div>

          <button onClick={() => setTodos([])} className="delete-all-button">
            Delete List
          </button>
        </div>

        {todos.length > 0 ? (
          <div className="todos">
            {" "}
            {todos.map((todo, index, arr) => {
              return (
                <div
                  key={index}
                  className={`todo ${
                    !(arr.length == index + 1) && "todo-divider"
                  }`}
                >
                  {todo.title}
                  <div className="todo-icon-wrapper">
                    <div className="todo-count">{todo.count}</div>
                    <button
                      className="todo-action-button"
                      onClick={() => handleSubtractionCount(index)}
                    >
                      <img className="image" src={minusIcon} alt="minus icon" />
                    </button>

                    <button
                      className="todo-action-button"
                      onClick={() => handleAdditionCount(index)}
                    >
                      <img className="image" src={plusIcon} alt="plus icon" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <hr />
            Data tidak tersedia
          </div>
        )}
      </section>
    </>
  );
}

export default App;
