import styled from "styled-components";
import { StyledIcon } from "@styled-icons/styled-icon";
import { UserCircle } from "@styled-icons/boxicons-regular/UserCircle";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { Blogger } from "@styled-icons/boxicons-logos/Blogger";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { ArrowIosBackOutline } from "@styled-icons/evaicons-outline/ArrowIosBackOutline";
import { HomeAlt } from "@styled-icons/boxicons-regular/HomeAlt";
import { CardChecklist } from "@styled-icons/bootstrap/CardChecklist";

import { Link } from "react-router-dom";

interface Props {
    icon: StyledIcon;
}

const NavContainer = styled.nav`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 15vw;
    height: 100vh;
    background-color: ${(props) => props.theme.btnColor};
    color: ${(props) => props.theme.btnTextColor}; ;
`;
const FoldIcon = styled(ArrowIosBackOutline)``;
const ProfileContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 10%;
    width: 100%;
    @media screen and (max-width: 1000px) {
        justify-content: center;
    }

    background-color: ${(props) => props.theme.accentColor};
`;
const ProfileIcon = styled.h1`
    margin-left: 20px;
`;
const ProfileId = styled.h1`
    display: flex;
    font-size: 1rem;
    @media screen and (max-width: 1000px) {
        display: none;
        font-size: 0.5rem;
    }
    transition: all 0.5s ease;
`;
const NavList = styled.ul`
    width: 100%;
    height: 80%;
`;
const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 20px 50px;

    &:hover {
        background-color: ${(props) => props.theme.accentColor};
        cursor: pointer;
        transition: all 0.3s ease;
    }
    @media screen and (max-width: 1000px) {
        padding: 20px auto;
        &:itemicon {
        }
    }
`;
const ItemIcon = styled.div`
    width: 30%;
`;
const ItemTitle = styled.h1`
    width: 70%;
    @media screen and (max-width: 1000px) {
        display: none;
        width: 100%;
        width: 0%;
    }
`;
const NavLink = styled(Link)``;

const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 10%;
`;
const FooterAuthor = styled.h3`
    font-size: 14px;
`;
const FooterSite = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export default function NavBar() {
    return (
        <NavContainer>
            <ProfileContainer>
                {/* <FoldIcon size="44" /> */}
                <ProfileIcon>
                    <UserCircle size="44" />
                </ProfileIcon>
                <ProfileId>chspower1</ProfileId>
            </ProfileContainer>
            <NavList>
                <NavLink to="/">
                    <ListItem>
                        <ItemIcon>
                            <HomeAlt size="20" title="Home" />
                        </ItemIcon>
                        <ItemTitle>홈</ItemTitle>
                    </ListItem>
                </NavLink>

                <NavLink to="/todolist">
                    <ListItem>
                        <ItemIcon>
                            <CardChecklist size="20" />
                        </ItemIcon>
                        <ItemTitle>할일 목록</ItemTitle>
                    </ListItem>
                </NavLink>
            </NavList>
            <Footer>
                <FooterAuthor>조호성</FooterAuthor>
                <FooterSite>
                    <Github size="40" />
                    <Blogger size="40" />
                    <Instagram size="40" />
                </FooterSite>
            </Footer>
        </NavContainer>
    );
}
