import axios from "axios";
import { Categories, IToDo, toDosState } from "./../components/atoms";
import { useRecoilState } from "recoil";
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export async function fetchToDos() {
    try {
        const { data } = await axios.get(`${SERVER_URL}/api/todos`);
        return data as IToDo[];
    } catch (err) {
        console.log(err);
    }
}

export async function deleteToDo(id: string) {
    await axios.delete(`${SERVER_URL}/todo/delete`, {
        data: {
            id,
        },
    });
}

export async function createToDo(newToDo: IToDo) {
    await axios.post(`${SERVER_URL}/post`, {
        data: {
            ...newToDo,
        },
    });
}
export async function updateCategory(id: string, newCategory: Categories) {
    await axios.put(`${SERVER_URL}/update/todo`, {
        data: {
            id,
            newCategory,
        },
    });
}
