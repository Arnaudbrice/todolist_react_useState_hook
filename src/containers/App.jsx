import React, { useState } from "react";
import TodolistItems from "../components/TodolistItems";
import Form from "../components/Form";
import Heading from "../components/Heading";

function App() {
  const [listItem, setListItem] = useState([]);

  const addItem = (inputText) => {
    // Trim whitespace from inputText and check its length
    const trimmedInput = inputText.trim();
    if (trimmedInput.length > 0) {
      setListItem((prev) => {
        return [...prev, inputText];
      });
    }
  };

  const handleKeyPress = (inputText) => {
    setListItem((prev) => {
      return [...prev, inputText];
    });
  };

  const deleteItemHandler = (id) => {
    setListItem((prev) => {
      return prev.filter((currentValue, index) => index !== id);
    });
  };

  return (
    <div className="container">
      <Heading />
      <Form onAdd={addItem} handleEnterKeyPress={handleKeyPress} />
      <TodolistItems itemList={listItem} OndeleteItem={deleteItemHandler} />
    </div>
  );
}

export default App;
