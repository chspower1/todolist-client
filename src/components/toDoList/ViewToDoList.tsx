import { IToDo, toDosState } from "./../atoms";
import { useRecoilValue } from "recoil";
export default function ViewToDoList() {
    const toDos = useRecoilValue(toDosState);
    return (
        <>
            {toDos.map((toDo) => (
                <ul key={toDo.id}>
                    <li>
                        <div>{toDo.text}</div>
                        <div>{toDo.date}</div>
                    </li>
                </ul>
            ))}
        </>
    );
}
