import { IToDo, toDosState } from "./../atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import { fetchToDos } from "../../api/api";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import ToDo from "./ToDo";

export default function ViewToDoList() {
    const [toDos, setToDos] = useRecoilState(toDosState);
    const { handleSubmit } = useForm();
    const {
        isLoading,
        data: DBtoDos,
        isFetching,
    } = useQuery(["toDos"], fetchToDos, {
        onSuccess() {
            setToDos(DBtoDos!);
            console.log("불러오기", toDos);
        },
    });

    return (
        <>
            {isLoading ? (
                <div>로딩중입니다.</div>
            ) : (
                DBtoDos?.map((toDo) => <ToDo key={toDo.id} {...toDo} />)
            )}
        </>
    );
}
