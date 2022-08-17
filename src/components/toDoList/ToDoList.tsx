import CreateToDoList from "./CreateToDoList";
import ViewToDoList from "./ViewToDoList";
import styled from "styled-components";
import { Container } from "./../Home";

const ContentContainer = styled(Container)`
    width: 70%;
    height: 70%;
    margin: auto;
    border-radius: 20px;
    background-color: ${(props) => props.theme.contentBgColor};
`;
const TodoListTitle = styled.h1`
    margin-top: 50px;
    margin-bottom: -50px;
    font-size: 2rem;
    color: ${(props) => props.theme.textColor};
`;

export default function ToDoList() {
    return (
        <Container>
            <TodoListTitle>해야 할 일!</TodoListTitle>
            <ContentContainer>
                {/* <CreateToDoList /> */}
                <ViewToDoList />
            </ContentContainer>
        </Container>
    );
}
