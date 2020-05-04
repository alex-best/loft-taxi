import React, { useState } from "react";
import {
    Grid,
    Paper,
    FormControl,
    Select,
    MenuItem,
    InputLabel,
    Button,
} from "@material-ui/core";
import { connect } from "react-redux";
import { getRouteRequest } from "../../../Store/Route/actions";
import useStyles from "../../../Hooks/useOrderCardStyles";
import OrderCancel from "./OrderCancel/";
import Loader from "../../Loader/";

const OrderForm = (props) => {
    const { addresses, getRouteRequest, isFetched } = props;

    const [from, setFrom] = useState("");
    const [where, setWhere] = useState("");
    const [isOrdered, setIsOrdered] = useState(false);

    const [fromList, setFromList] = useState(addresses);
    const [whereList, setWhereList] = useState(addresses);

    const classes = useStyles();

    if (!isFetched) {
        return <Loader />;
    }

    let isDisabled = true;

    if (from && where) {
        isDisabled = false;
    }

    const onChangeFromInputHandle = (e) => {
        const address = e.target.value;
        const idx = addresses.findIndex((item) => item === address);
        const newAddressList = [...addresses];

        newAddressList.splice(idx, 1);

        setWhereList(newAddressList);
        setFrom(address);
    };

    const onChangeWhereInputHandle = (e) => {
        const address = e.target.value;
        const idx = addresses.findIndex((item) => item === address);
        const newAddressList = [...addresses];

        newAddressList.splice(idx, 1);

        setFromList(newAddressList);
        setWhere(e.target.value);
    };

    const onClickHandler = (e) => {
        e.preventDefault();

        if (from && where) {
            getRouteRequest({ from, where });
            setIsOrdered(true);
        }
    };

    const onCancelClickHandler = () => {
        setIsOrdered(false);
    };

    if (isOrdered) {
        return <OrderCancel onCancelClick={onCancelClickHandler} />;
    }

    return (
        <Paper className={classes.orderForm} elevation={2}>
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12}>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Откуда</InputLabel>
                        <Select
                            value={from}
                            onChange={onChangeFromInputHandle}
                            inputProps={{
                                "data-testid": "fromInput",
                            }}
                        >
                            {fromList.map((address) => {
                                return (
                                    <MenuItem key={address} value={address}>
                                        {address}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Куда</InputLabel>
                        <Select
                            value={where}
                            onChange={onChangeWhereInputHandle}
                            inputProps={{
                                "data-testid": "whereInput",
                            }}
                        >
                            {whereList.map((address) => {
                                return (
                                    <MenuItem key={address} value={address}>
                                        {address}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        className={classes.btn}
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={onClickHandler}
                        disabled={isDisabled}
                        data-testid="btn"
                    >
                        Вызвать такси
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
};

const mapStateToProps = (state) => {
    return {
        addresses: state.addressList.addresses,
        isFetched: state.addressList.isFetched,
    };
};

const mapDispatchToProps = { getRouteRequest };

export const connectedOrderForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderForm);

export default OrderForm;
