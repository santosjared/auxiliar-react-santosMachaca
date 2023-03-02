import { createTheme,CssBaseline,ThemeProvider } from "@material-ui/core";

const theme = createTheme({
    palette:{
        primary:{
            main:'#263238',
            light:'#37474f',
            contrastText:'#fff'
        }
    }
})
export const Theme = ({children})=>(
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        {children}
    </ThemeProvider>
);