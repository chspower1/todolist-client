import CreateToDoList from "./CreateToDoList";
import ViewToDoList from "./ViewToDoList";
import styled from "styled-components";
import { Container } from "./../Home";

const TodoListTitle = styled.h1`
    font-size: 26px;
`;

export default function ToDoList() {
    return (
        <Container>
            <TodoListTitle>해야 할 일!</TodoListTitle>
            <CreateToDoList />
            <ViewToDoList />
        </Container>
    );
}
