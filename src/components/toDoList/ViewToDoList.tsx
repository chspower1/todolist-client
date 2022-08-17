import { toDosState } from "./../atoms";
import { useRecoilState } from "recoil";
import { fetchToDos } from "../../api/api";
import { useQuery } from "@tanstack/react-query";
import ToDo, { ChangeItem, DateItem, DeleteItem, Item, ToDoItem, ToDoListTag } from "./ToDo";
import styled from "styled-components";

const ListName = styled(ToDoListTag)`
    background-color: #f7f7f7;
    box-shadow: 0px 5px 10px 1px #ebebeb;
`;

export default function ViewToDoList() {
    const [toDos, setToDos] = useRecoilState(toDosState);
    const { isLoading } = useQuery(["toDos"], fetchToDos, {
        onSuccess(data) {
            setToDos(data!);
        },
        keepPreviousData: true,
    });

    return (
        <>
            <ListName>
                <Item>
                    <ToDoItem>할 일</ToDoItem>
                    <DateItem>날짜</DateItem>
                    <ChangeItem>상태 바꾸기</ChangeItem>
                    <DeleteItem>지우기</DeleteItem>
                </Item>
            </ListName>
            {isLoading ? "로딩중" : toDos?.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}
        </>
    );
}
