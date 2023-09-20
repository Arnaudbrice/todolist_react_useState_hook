import React from "react";
import TodoItem from "./TodoItem";

const TodolistItems = (props) => {
  return (
    <div>
      <ol>
        {props.itemList.map((item, index) => (
          <TodoItem
            id={index}
            key={index}
            text={item}
            OndeleteItemClick={() => {
              props.OndeleteItem(index);
            }}
          />
        ))}
      </ol>
    </div>
  );
};

export default TodolistItems;
