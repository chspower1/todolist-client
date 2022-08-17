import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Router from "./Router";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import { lightTheme } from "./theme";

const GlobalStyle = createGlobalStyle`
    ${reset}
    a{
        color:white;
        text-decoration:none;
    }
    body{
        font-family: "Sebang";
        overflow-x:hidden;
    }
    *{
        font-family: "Sebang";
        box-sizing: border-box;
        
    }
`;
function App() {
    return (
        <>
            <ThemeProvider theme={lightTheme}>
                <GlobalStyle />
                <Router />
                <ReactQueryDevtools />
            </ThemeProvider>
        </>
    );
}

export default App;
