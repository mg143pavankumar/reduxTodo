import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();

  return (
    <>
      <div className="main__div">
        <div className="child__div">
          <figure>
            <figcaption>Add Your List Here</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="✍️ Add items..."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <i
              className="fa fa-plus add__btn"
              title="Add items"
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            ></i>
          </div>
          <div className="showItems">
            {list.map((elem) => (
              <div key={elem.id} className="eachItem">
                <h3>{elem.data}</h3>
                <div className="todo__btn">
                  <i
                    className="far fa-trash-alt add__btn"
                    title="Delete items"
                    onClick={() => dispatch(deleteTodo(elem.id))}
                  ></i>
                </div>
              </div>
            ))}
          </div>

          <div className="showitems">
            <button
              className="btn effect04"
              onClick={() => dispatch(removeTodo())}
              data-sm-link-text="remove All"
            >
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
