/**
 * Functional component representing a form.
 *
 * @component
 * @example
 * <Form onAdd={handleAdd} handleEnterKeyPress={handleEnterKeyPress} />
 */
import React, { useState } from "react";

const Form = (props) => {
  const [inputText, setInputText] = useState("");

  /**
   * Event handler for input field change.
   *
   * @param {object} event - The event object.
   */
  const handleChange = (event) => {
    const { value } = event.target;
    setInputText(value);
  };

  /**
   * Event handler for button click.
   * Calls the `onAdd` function from props with the current value of `inputText`
   * and resets the `inputText` state to an empty string.
   */
  const handleAdd = () => {
    props.onAdd(inputText);
    setInputText("");
  };

  /**
   * Event handler for key press in the input field.
   * Calls the `handleEnterKeyPress` function from props with the current value of `inputText`
   * if the Enter key is pressed and the trimmed `inputText` has a length greater than 0.
   * Resets the `inputText` state to an empty string.
   *
   * @param {object} event - The event object.
   */
  const handleKeyDown = (event) => {
    const trimmedInput = inputText.trim();
    if (event.key === "Enter" && trimmedInput.length > 0) {
      props.handleEnterKeyPress(inputText);
      setInputText("");
    }
  };

  return (
    <div className="form">
      <input
        onChange={handleChange}
        type="text"
        name="inputText"
        value={inputText}
        onKeyDown={handleKeyDown}
      />
      <button type="submit" onClick={handleAdd}>
        <span>Add</span>
      </button>
    </div>
  );
};

export default Form;
