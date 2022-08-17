import axios from "axios";
import mongoose from "mongoose";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import { createToDo } from "src/api/api";
import { Categories, categoryState, IToDo, toDosState } from "../atoms";
import styled from "styled-components";
import { CalendarEvent } from "@styled-icons/remix-fill/CalendarEvent";
interface IForm {
    text: string;
    date: Date;
}
const Title = styled.div`
    margin-bottom: 10px;
`;
const Form = styled.form`
    position: absolute;
    right: 18%;
    top: 18%;
    background-color: #e5ebee;
    box-shadow: 3px 3px 3px 1px #dddddd;
    width: 25%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* border: solid 1px ${(props) => props.theme.btnColor}; */
`;
const Input = styled.input`
    width: 70%;
    height: 15%;
    border: none;
    outline: none;
    text-align: center;
    margin: 10px 0px;
    background-color: white;
    color: gray;
`;
const Btn = styled.button`
    margin-top: 5px;
    width: 70%;
    height: 15%;
    border-radius: 10px;
    border: none;
    background-color: #3870cb;
    &:hover {
        background-color: #0e4aaa;
        cursor: pointer;
    }

    color: white;
`;

export default function CreateToDoList() {
    const [toDos, setToDos] = useRecoilState(toDosState);
    const { register, handleSubmit } = useForm<IForm>();

    const onvalid = async (data: IForm) => {
        const { text, date } = data;
        const newToDo: IToDo = {
            id: String(Date.now()),
            text,
            date: String(date),
            category: Categories.TO_DO,
        };
        toDos ? setToDos((prev) => [...prev, newToDo]) : setToDos([newToDo]);
        console.log(newToDo);
        createToDo(newToDo);
    };
    return (
        <>
            <Form onSubmit={handleSubmit(onvalid)}>
                <Title>
                    <CalendarEvent size="24" />
                    <span>꼭 해내고 만다!</span>
                </Title>
                <Input
                    type="text"
                    placeholder="할 일을 적어보세요!"
                    {...register("text", {
                        required: "필수 입력사항입니다!",
                    })}
                />
                <Input
                    type="date"
                    {...register("date", {
                        required: "필수 입력사항입니다!",
                    })}
                />

                <Btn>작성하기!</Btn>
            </Form>
        </>
    );
}
