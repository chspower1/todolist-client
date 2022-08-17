import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100vw;
    min-width: 85vw;
    height: 93vh;
    margin-left: 15vh;
    background-color: ${(props) => props.theme.bgColor};
`;
export default function Home() {
    return (
        <Container>
            <h1>환영합니다!</h1>
        </Container>
    );
}
