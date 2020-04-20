import React, { useState } from "react";
import DatePickerInput from "../../Components/DatePickerInput/DatePickerInput";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import { MCIcon } from "loft-taxi-mui-theme";
import "./ProfileForm.scss";

const ProfileForm = (props) => {
    const [cardNumber, setCardNumber] = useState(props.cardNumber);
    const [cardName, setCardName] = useState(props.cardName);
    const [cvc, setCvc] = useState(props.cvc);
    const [, setExpiryDate] = useState(props.expiryDate);

    const onCardNumberChangeHandler = (e) => {
        const value = e.target.value.trim();

        if (value.length === 20) return;

        const onlyNum = value.replace(/[^\d\s]/g, "");
        const reg = /\d{1,4}/g;

        setCardNumber(onlyNum && onlyNum.substring(0, 20).match(reg).join(" "));
    };

    const onCardNameChangeHandler = (e) => {
        const value = e.target.value;

        const cardName = value.replace(/[0-9]/g, "");

        setCardName(cardName);
    };

    const onCvcChangeHandler = (e) => {
        const value = e.target.value;

        const cvc = value.replace(/\D/g, "");

        if (cvc.length === 4) return;

        setCvc(cvc);
    };

    const onDatePickerChangeHandler = (date) => {
        const newDate = getFormattedDate(date);
        setExpiryDate(newDate);
    };

    const getFormattedDate = (date) => {
        const year = date.getFullYear().toString().slice(2);
        let month = (date.getMonth() + 1).toString();

        if (month.length < 2) {
            month = `0${month}`;
        }

        return `${month}/${year}`;
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        props.onSubmit();
    };

    return (
        <form className="card_form" onSubmit={onSubmitHandler}>
            <Grid container alignContent="center">
                <Grid item xs={12}>
                    <Grid container spacing={1} justify="space-evenly">
                        <Paper className="card_form_col" elevation={3}>
                            <MCIcon />
                            <TextField
                                label="Номер карты"
                                style={{
                                    marginBottom: "20px",
                                }}
                                placeholder="0000 0000 0000 0000"
                                value={cardNumber}
                                required
                                onChange={onCardNumberChangeHandler}
                            />
                            <DatePickerInput
                                onChange={onDatePickerChangeHandler}
                            />
                        </Paper>
                        <Paper className="card_form_col" elevation={3}>
                            <TextField
                                label="Имя владельца"
                                style={{
                                    marginBottom: "20px",
                                }}
                                placeholder="CARD HOLDER"
                                value={cardName}
                                required
                                onChange={onCardNameChangeHandler}
                            />
                            <TextField
                                label="CVC"
                                placeholder="CVC"
                                value={cvc}
                                required
                                onChange={onCvcChangeHandler}
                            />
                        </Paper>
                        <Grid item xs={12}>
                            <Button
                                style={{
                                    marginTop: "40px",
                                }}
                                color="primary"
                                variant="contained"
                                type="submit"
                            >
                                Сохранить
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    );
};

export default ProfileForm;
