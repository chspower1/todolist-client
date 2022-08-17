import styled from "styled-components";
import { Link, useLocation, useParams, useRoutes } from "react-router-dom";
import { List } from "@styled-icons/bootstrap/List";
import { MagnifyingGlass } from "@styled-icons/entypo/MagnifyingGlass";
const Container = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width: 85vw;
    height: 8vh;
    margin-left: 15vw;
    background-color: white;
    color: ${(props) => props.theme.textColor};
`;
const Title = styled.h1`
    position: absolute;
    left: 20px;
    font-size: 1.5rem;
    margin-left: 20px;
`;
const SearchForm = styled.form`
    position: absolute;
    right: 50%;
    transform: translateX(50%);
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const SearchInput = styled.input.attrs({ placeholder: "할 일을 찾아주세요!" })`
    width: 25rem;
    height: 2.5rem;
    border-radius: 20px;
    border: solid 3px ${(props) => props.theme.accentColor};
    outline: none;
    text-align: center;
    background-color: white;
`;
const SearchBtn = styled.button`
    border-radius: 100px;
    border: none;
    position: absolute;
    background-color: white;
    right: 3%;
`;
const Profile = styled.div`
    position: absolute;
    right: 20px;
    margin-right: 20px;
`;
export default function StatusBar() {
    const { pathname } = useLocation();

    return (
        <Container>
            <Title>{pathname === "/" ? <>HOME</> : pathname.slice(1).toUpperCase()}</Title>
            <SearchForm>
                <SearchInput />
                <SearchBtn>
                    <MagnifyingGlass size="30" />
                </SearchBtn>
            </SearchForm>

            <Profile>
                <List size="44" />
            </Profile>
        </Container>
    );
}
