import { Route, Routes, BrowserRouter } from "react-router-dom";
import ToDoList from "./components/toDoList/ToDoList";
import styled from "styled-components";
import SideNav from "./components/NavBar/NavBar";
import StatusBar from "./components/StatusBar/StatusBar";
import Home from "./components/Home";

const Container = styled.body`
    display: flex;
`;
const ContentScreen = styled.section`
    display: flex;
    flex-direction: column;
`;

export default function Router() {
    return (
        <BrowserRouter>
            <SideNav />
            <StatusBar />
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/todolist"} element={<ToDoList />} />
            </Routes>
        </BrowserRouter>
    );
}
