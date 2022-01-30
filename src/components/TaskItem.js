import React from 'react';
import styled from "styled-components";
const TaskItemContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

function TaskItem() {
    return (
        <TaskItemContainer>
            <div>Task name</div>
            <div>Status</div>
            <div><button>do undo</button></div>
        </TaskItemContainer>
    );
}

export default TaskItem;