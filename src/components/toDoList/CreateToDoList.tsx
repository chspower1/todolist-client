import axios from "axios";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, IToDo, toDosState } from "../atoms";
import ViewToDoList from "./ViewToDoList";

interface IForm {
    text: string;
    date: Date;
}

export default function CreateToDoList() {
    const [toDos, setToDos] = useRecoilState(toDosState);
    const category = useRecoilValue(categoryState);
    const { register, handleSubmit } = useForm<IForm>();

    const onvalid = async (data: IForm) => {
        const { text } = data;
        const newData: IToDo = { id: Date.now(), text, date: String(data.date), category };
        setToDos((prev) => [...prev, newData]);

        await axios
            .postForm("/", JSON.stringify(newData))
            .then((res) => console.log("완료", newData, res)) //
            .catch((err) => console.log("실패", err));
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
