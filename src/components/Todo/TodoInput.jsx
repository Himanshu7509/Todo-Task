import React, { useState } from "react";

function TodoInput(props) {
  const [inputText, setInputText] = useState("");
  const handleEnterPress = (e)=>{
      if(e.keyCode===13){
          props.addList(inputText)
          setInputText("")
      }
  }
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        value={inputText}
        onKeyDown={handleEnterPress}
      />
      <br />
      <button
        className="add-btn"
        onClick={() => {
          props.addList(inputText);
          setInputText("")
        }}
      >
        Add ToDo
      </button>

    </div>
  );
}

export default TodoInput;
