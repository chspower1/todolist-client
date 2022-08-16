import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const GlobalStyle = createGlobalStyle`
    ${reset}
`;
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                <GlobalStyle />
                <App />
            </QueryClientProvider>
        </RecoilRoot>
    </React.StrictMode>
);
