import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectValue } from "./todoList.selector";
import { addTodo } from "./todoListSlice";

const TodoList = () => {
  const val = useAppSelector(selectValue);
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState("");

  const onChangeHandler = (e: any) => {
    setInputValue(e.target.value);
  };

  const onAddButton = () => {
    dispatch(addTodo(inputValue));
    setInputValue("");
  };

  const ondelButton = () => {};

  const handleItem = (value: any) => {
    return (
      <>
        {val}
        <span>
          <button onClick={ondelButton}>-</button>
        </span>
      </>
    );
  };

  const handleList = () => {
    console.log(val, "===>");
    return (
      <>
        {val.map((value:any) => {
          console.log(value, "===>");
          return <p>{handleItem(value)}</p>;
        })}
      </>
    );
  };

  return (
    <div>
      <InputText value={inputValue} onChange={onChangeHandler} />
      <button onClick={onAddButton}>Add Amount</button>
      <span>{handleList()}</span>
    </div>
  );
};

export default TodoList;
