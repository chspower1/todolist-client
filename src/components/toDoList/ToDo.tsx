import { useForm } from "react-hook-form";
import { IToDo, toDosState } from "./../atoms";
import { useRecoilState } from "recoil";
import axios from "axios";
export default function ToDo(toDo: IToDo) {
    const SERVER_URL = process.env.REACT_APP_SERVER_URL;
    const [toDos, setToDos] = useRecoilState(toDosState);
    const { handleSubmit } = useForm();

    const onClick = () => {
        const deleteToDo = async () => {
            const id = toDo.id;
            await axios.delete(`${SERVER_URL}/todo/delete`, {
                data: {
                    id,
                },
            });
        };
        deleteToDo();
        // setToDos((prevToDos) => {
        //     // const targetIndex = toDos.findIndex((i) => i.id === toDo.id);
        //     // console.log(targetIndex);
        //     // const front = toDos.slice(0, targetIndex + 1);
        //     // const back = toDos.slice(targetIndex + 1);
        //     // const newToDos = [...front, ...back];
        //     const deleteToDo = async (toDo.id) => {
        //         await axios.delete(`${SERVER_URL}/todo/delete`, {
        //             data: {
        //                 toDo.id,
        //             },
        //         });
        //     };
        //     deleteToDo(toDo.id);
        //     return newToDos;
        // });
        // console.log(toDos);
    };
    const onvalid = () => {};
    return (
        <>
            <ul key={toDo.id}>
                <li>
                    <form onSubmit={handleSubmit(onvalid)}>
                        <div>
                            <span>{toDo.text}</span>
                            <span>{toDo.date}</span>
                        </div>
                        <button onClick={() => onClick()}>할거야!</button>
                        <button onClick={() => onClick()}>하는중!</button>
                        <button onClick={() => onClick()}>다했어!</button>
                        <button onClick={() => onClick()}>삭제!</button>
                    </form>
                </li>
            </ul>
        </>
    );
}
