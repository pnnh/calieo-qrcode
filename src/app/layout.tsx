import theme from './theme';
import {CssBaseline, ThemeProvider} from "@mui/material"
import {RecoilRoot} from "recoil";
import {StrictMode} from "react";

export default function RootLayout({children}: {
    children: React.ReactNode | React.ReactNode[]
}) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <RecoilRoot>
                <StrictMode>
                    {children}
                </StrictMode>
            </RecoilRoot>
        </ThemeProvider>
    )
}
