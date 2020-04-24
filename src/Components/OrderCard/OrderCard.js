import React from "react";
import OrderForm from "./OrderForm/OrderForm";
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';
import { Paper, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux'

const useStyles = makeStyles((theme) => ({
    orderCard: {
        position: "absolute",
        top: "125px",
        left: "50px",
        width: "420px",
        padding: "35px",
        textAlign: 'center'
    },
    btn: {
        marginTop: "30px",
        width: "100%",
    },
}));

const OrderCard = (props) => {
    const classes = useStyles();
    const { isCardSet, isLoading } = props;

    if (isLoading) {
        return (
            <Paper className={classes.orderCard} elevation={2}>
                <Loader />
            </Paper>
        )
    }

    return (
        <>
            {isCardSet ? (
                <OrderForm />
            ) : (
                <Paper className={classes.orderCard} elevation={2}>
                    <Grid container justify="center" alignItems="center">
                        <Grid item xs={12}>
                            <h2>Нет данных об оплате</h2>
                            <p>Заполните данные о карте на странице профиля чтобы заказать машину.</p>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                component={Link}
                                className={classes.btn}
                                variant="contained"
                                color="primary"
                                to="/profile"
                            >
                                Заполнить данные
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            )}
        </>
    );
};

const mapStateToProps = state => {
    return {
        isCardSet: state.profile.success,
        isLoading: state.profile.isLoading
    }
}

export default connect(mapStateToProps)(OrderCard);
