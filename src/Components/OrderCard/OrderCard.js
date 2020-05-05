import React from "react";
import { OrderForm } from "./OrderForm/";
import Loader from '../Loader/';
import { Link } from 'react-router-dom';
import { Paper, Grid, Button } from "@material-ui/core";
import { connect } from 'react-redux'
import useStyles from '../../Hooks/useOrderCardStyles';

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


export const connectedOrderCard = connect(mapStateToProps)(OrderCard);
export default OrderCard;
