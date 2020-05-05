import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    orderForm: {
        position: "absolute",
        top: "125px",
        left: "50px",
        width: "420px",
        padding: "35px",
        textAlign: "center",
    },
    formControl: {
        margin: theme.spacing(1),
        width: "97%",
    },
    btn: {
        marginTop: "30px",
        width: "100%",
    },
}));