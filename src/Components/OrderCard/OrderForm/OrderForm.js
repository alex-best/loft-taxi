import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
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
import OrderCancel from "./OrderCancel";

const useStyles = makeStyles((theme) => ({
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

const OrderForm = (props) => {
    const { addresses, getRouteRequest } = props;

    const [from, setFrom] = useState("");
    const [where, setWhere] = useState("");
    const [isOrdered, setIsOrdered] = useState(false);

    const [fromList, setFromList] = useState(addresses);
    const [whereList, setWhereList] = useState(addresses);

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

    const classes = useStyles();

    const onCancelClickHandler = () => {
        setIsOrdered(false);
    };

    if (isOrdered) {
        return (
            <OrderCancel
                classes={classes}
                onCancelClick={onCancelClickHandler}
            />
        );
    }

    return (
        <Paper className={classes.orderForm} elevation={2}>
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12}>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Откуда</InputLabel>
                        <Select value={from} onChange={onChangeFromInputHandle}>
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
    };
};

const mapDispatchToProps = { getRouteRequest };

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
