import CreateToDoList from "./CreateToDoList";
import ViewToDoList from "./ViewToDoList";
import styled from "styled-components";
import { Container } from "./../Home";
import { Plus } from "@styled-icons/boxicons-regular/Plus";
import { ArrowIosForward } from "@styled-icons/evaicons-solid/ArrowIosForward";
import { Btn } from "./ToDo";
import { useState } from "react";
const ContentContainer = styled(Container)`
    width: 70%;
    height: 70%;
    margin: auto;
    border-radius: 15px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    box-shadow: 7px 7px 10px 1px #d8d8d8;
    background-color: ${(props) => props.theme.contentBgColor};
`;
const TodoListTitle = styled.h1`
    margin-top: 50px;
    margin-bottom: -50px;
    font-size: 2rem;
    color: ${(props) => props.theme.textColor};
`;
const PlusBtn = styled(Btn)`
    margin: 0px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 13.8%;
    top: 19%;
    color: white;
    background-color: #3870cb;
    &:hover {
        background-color: #0e4aaa;
    }
`;
export default function ToDoList() {
    const [createOn, setCreateOn] = useState(false);
    const onClick = () => {
        setCreateOn((cur) => !cur);
    };
    return (
        <Container>
            <TodoListTitle>해야 할 일!</TodoListTitle>
            {createOn && <CreateToDoList />}
            <PlusBtn onClick={onClick}>
                {createOn ? <ArrowIosForward size="44" /> : <Plus size="44" />}
            </PlusBtn>
            <ContentContainer>
                <ViewToDoList />
            </ContentContainer>
        </Container>
    );
}
