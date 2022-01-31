import styled from "styled-components";
import React, { useState } from "react";
import { addTask } from "../redux/action";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: left;
`;
const Button = styled.button`
  background: #ff9c08;
`;

function EntryForm() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (todo !== "") {
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
      <Button onClick={handleSubmit}>save</Button>
    </Container>
  );
}

export default EntryForm;
