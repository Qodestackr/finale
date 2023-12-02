import { createStyles } from "@mantine/core";
import { getTheme } from "../app/appFunctions";


const compStyles = createStyles((theme) => ({
    price: {
        color: getTheme(theme) ? theme.white : "#242a49",
        fontSize: 40,
        fontWeight: 400,
        letterSpacing: -2,

        [theme.fn.smallerThan('md')]: {
            fontSize: 30,
        },
    },
    pricelabel: {
        color: getTheme(theme) ? theme.white : "#242a49",
        fontSize: 20,
        fontWeight: 400,
        letterSpacing: -2,

        [theme.fn.smallerThan('md')]: {
            fontSize: 14,
        },
    }
}));

export default compStyles