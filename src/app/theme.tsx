import {createTheme} from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: [
            'Helvetica Neue',
            'PingFang SC',
            'Microsoft YaHei',
            'Source Han Sans SC',
            'Noto Sans CJK SC',
            'sans-serif',
        ].join(','),
    },
});

export default theme;
