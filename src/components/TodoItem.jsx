import React from "react";

const TodoItem = (props) => {
  return (
    <>
      <li onClick={() => props.OndeleteItemClick(props.id)}>{props.text}</li>
    </>
  );
};

export default TodoItem;
