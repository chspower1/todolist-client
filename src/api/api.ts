import axios from "axios";
import { IToDo } from "./../components/atoms";
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export async function fetchToDos() {
    try {
        const { data } = await axios.get(`${SERVER_URL}/api/todos`);
        return data as IToDo[];
    } catch (err) {
        console.log(err);
    }
}
