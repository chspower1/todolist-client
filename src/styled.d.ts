import "styled-components";

// and extend them!
declare module "styled-components" {
    export interface DefaultTheme {
        bgColor: string;
        textColor: string;
        accentColor: string;
        contentBgColor: string;
        btnColor: string;
        btnTextColor: string;
        temaColor: string;
    }
}
