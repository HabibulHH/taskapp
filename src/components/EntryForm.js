import React from "react";
import styled from "styled-components";
import useTodoItemList from "../hooks/useTodoItemList";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: left;
`;
const Button = styled.button`
  background: #ff9c08;
`;

function EntryForm(props) {
  //   const todos = useTodoItemList([]);

  return (
    <Container>
      <input type="text" name="Task name" id="task" />
      <Button
      // onClick={() => {
      //   todos.addItem({ name: "hira add", status: "1" });
      // }}
      >
        save
      </Button>
    </Container>
  );
}

export default EntryForm;
