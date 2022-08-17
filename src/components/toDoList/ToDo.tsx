import { Categories, IToDo } from "./../atoms";
import { deleteToDo, updateCategory } from "src/api/api";
import { useState } from "react";
import { Delete } from "@styled-icons/material/Delete";
import { Done } from "@styled-icons/material/Done";
import { Run } from "@styled-icons/boxicons-regular/Run";
import { StickyNote } from "@styled-icons/fa-regular/StickyNote";
import styled from "styled-components";

export const ToDoListTag = styled.ul`
    width: 100%;
    font-size: 1rem;
`;
export const Item = styled.li`
    display: flex;
    justify-content: space-between;
`;
export const ToDoItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: solid 1px #e7e7e7;
    padding: 25px 0px;
    width: 20%;
`;
export const DateItem = styled(ToDoItem)`
    width: 40%;
`;
export const ChangeItem = styled(ToDoItem)`
    padding: 0px;
    width: 30%;
`;
export const DeleteItem = styled(ToDoItem)`
    width: 10%;
    padding: 0px;
`;
export const Btn = styled.button`
    border: none;
    background-color: #ebebeb;
    width: 40px;
    height: 40px;
    border-radius: 30px;
    margin: 0px 10px;
    color: #a3a3a3;
    cursor: pointer;
    &:hover {
        background-color: ${(props) => props.theme.accentColor};
        color: white;
    }
`;
export const GreenBtn = styled(Btn)`
    color: white;
    background-color: #43a743;
`;

export const DelBtn = styled(Btn)`
    background-color: #ff5a72;
    font-size: 0.7rem;
    color: white;
    &:hover {
        background-color: #f12d4b;
        color: white;
    }
`;
export default function ToDo(toDoProps: IToDo) {
    const [onDel, setOnDel] = useState(false);
    const [toDo, setToDo] = useState(toDoProps);

    const checkCategory = (cur: string) => {
        if (cur === "TO_DO") {
            return (
                <>
                    <GreenBtn
                        name={Categories.TO_DO}
                        onClick={() => onClickCategory(Categories.TO_DO)}
                    >
                        <StickyNote size="22" />
                    </GreenBtn>
                    <Btn name={Categories.DOING} onClick={() => onClickCategory(Categories.DOING)}>
                        <Run size="22" />
                    </Btn>
                    <Btn name={Categories.DONE} onClick={() => onClickCategory(Categories.DONE)}>
                        <Done size="22" />
                    </Btn>
                </>
            );
        } else if (cur === "DOING") {
            return (
                <>
                    <Btn name={Categories.TO_DO} onClick={() => onClickCategory(Categories.TO_DO)}>
                        <StickyNote size="22" />
                    </Btn>
                    <GreenBtn
                        name={Categories.DOING}
                        onClick={() => onClickCategory(Categories.DOING)}
                    >
                        <Run size="22" />
                    </GreenBtn>
                    <Btn name={Categories.DONE} onClick={() => onClickCategory(Categories.DONE)}>
                        <Done size="22" />
                    </Btn>
                </>
            );
        } else if (cur === "DONE") {
            return (
                <>
                    <Btn name={Categories.TO_DO} onClick={() => onClickCategory(Categories.TO_DO)}>
                        <StickyNote size="22" />
                    </Btn>
                    <Btn name={Categories.DOING} onClick={() => onClickCategory(Categories.DOING)}>
                        <Run size="22" />
                    </Btn>
                    <GreenBtn
                        name={Categories.DONE}
                        onClick={() => onClickCategory(Categories.DONE)}
                    >
                        <Done size="22" />
                    </GreenBtn>
                </>
            );
        }
    };

    //현재 ToDo 지우기
    const onClickDel = () => {
        deleteToDo(toDo.id);
        setOnDel(true);
    };
    // 카테고리 바꾸기
    const onClickCategory = (newCategory: Categories) => {
        updateCategory(toDo.id, newCategory);
        setToDo((prev) => ({
            ...prev,
            category: newCategory,
        }));
    };
    return (
        <>
            {onDel ? null : (
                <ToDoListTag key={toDo.id}>
                    <Item>
                        <ToDoItem>{toDo.text}</ToDoItem>
                        <DateItem>{toDo.date}</DateItem>
                        <ChangeItem>{checkCategory(toDo.category)}</ChangeItem>
                        <DeleteItem>
                            <DelBtn name={Categories.TO_DO} onClick={() => onClickDel()}>
                                <Delete size="22" />
                            </DelBtn>
                        </DeleteItem>
                    </Item>
                </ToDoListTag>
            )}
        </>
    );
}
