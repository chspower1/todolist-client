import ToDoList from "./components/toDoList/ToDoList";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
function App() {
    return (
        <>
            <ToDoList />
            <ReactQueryDevtools />
        </>
    );
}

export default App;
