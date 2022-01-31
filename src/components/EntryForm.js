import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { addTask, update } from "../redux/action";
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: left;
  height: 40px;
`;
const Button = styled.button`
  background: #ff9c08;
  width: 100px;
  color: white;
  font-size: 15px;
  font-weight: 600;
  border: none;
`;

function EntryForm() {
  const { selectedItem } = useSelector((state) => state.taskStore);
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedItem) {
      setTodo(selectedItem.name);
    } else {
      setTodo("");
    }
  }, [selectedItem]);

  const handleSubmit = () => {
    if (selectedItem) {
      selectedItem.name = todo;
      dispatch(update(selectedItem));
    } else if (todo !== "") {
      dispatch(
        addTask({
          name: todo,
          status: "0",
          date: new Date(),
          id: uuidv4(),
        })
      );
      setTodo("");
    }
  };
  return (
    <Container>
      <input
        id="todo"
        value={todo}
        onChange={(e) => {
          setTodo(e.currentTarget.value);
        }}
        className="todo"
      />
      <Button onClick={handleSubmit}>{selectedItem ? "Update" : "Save"}</Button>
    </Container>
  );
}

export default EntryForm;
