import React from "react";
import {
    Grid,
    Paper,
    Button,
} from "@material-ui/core";

const OrderCancel = (props) => {
    
    const { classes } = props;

    const onClickHandler = (e) => {
        e.preventDefault();

        props.onCancelClick()
    }

    return (
        <Paper className={classes.orderForm} elevation={2}>
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12}>
                    <h2>Спасибо за заказ!</h2>
                    <p>
                        Ваше такси уже едет к вам. Прибудет приблизительно через
                        10 минут.
                    </p>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        className={classes.btn}
                        variant="contained"
                        color="primary"
                        onClick={onClickHandler}
                    >
                        Отменить заказ
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default OrderCancel;
