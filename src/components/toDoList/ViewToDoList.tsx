import { toDosState } from "./../atoms";
import { useRecoilState } from "recoil";
import { fetchToDos } from "../../api/api";
import { useQuery } from "@tanstack/react-query";
import ToDo from "./ToDo";

export default function ViewToDoList() {
    const [toDos, setToDos] = useRecoilState(toDosState);
    const { isLoading } = useQuery(["toDos"], fetchToDos, {
        onSuccess(data) {
            setToDos(data!);
        },
        keepPreviousData: true,
    });

    return <>{isLoading ? "로딩중" : toDos?.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}</>;
}
