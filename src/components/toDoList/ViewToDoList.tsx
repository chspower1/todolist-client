import { toDosState } from "./../atoms";
import { useRecoilState } from "recoil";
import { fetchToDos } from "../../api/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import ToDo from "./ToDo";

export default function ViewToDoList() {
    const [toDos, setToDos] = useRecoilState(toDosState);
    const { isFetching,dataUpdatedAt } = useQuery(["toDos"], fetchToDos, {
        onSuccess(data) {
            setToDos(data!);
        },
        keepPreviousData: true,
    });
    // const saveToDos = useMutation(fetchToDos);
    // const;
    // console.log(toDos);

    return (
        <>
            {toDos?.map((toDo) => (
                <ToDo key={toDo.id} {...toDo} />
            ))}
        </>
    );
}
