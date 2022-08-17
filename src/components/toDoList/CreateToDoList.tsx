import axios from "axios";
import mongoose from "mongoose";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import { createToDo } from "src/api/api";
import { Categories, categoryState, IToDo, toDosState } from "../atoms";

interface IForm {
    text: string;
    date: Date;
}
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
            <form onSubmit={handleSubmit(onvalid)}>
                <input
                    type="text"
                    {...register("text", {
                        required: "필수 입력사항입니다!",
                    })}
                />
                <input
                    type="date"
                    {...register("date", {
                        required: "필수 입력사항입니다!",
                    })}
                />
                <button>작성하기!</button>
            </form>
        </>
    );
}
