import React from "react";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import DatePickerInput from '../../Components/DatePickerInput/DatePickerInput';
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import { MCIcon } from "loft-taxi-mui-theme";

import "./ProfilePage.scss";

const styles = {
    panel: {
        marginTop: "50px",
        width: "100%",
        textAlign: "center",
    },
};

const ProfilePage = (props) => {
    return (
        <MainLayout onPageChange={props.onPageChange}>
            <div className="Profile" style={styles.root}>
                <Grid item xs={6}>
                    <Grid container>
                        <Paper
                            style={styles.panel}
                            className="Profile_card card"
                        >
                            <div className="card_header">
                                <h4>Профиль</h4>
                                <span>Способ оплаты</span>
                            </div>
                            <form className="card_form">
                                <Grid container alignContent="center">
                                    <Grid item xs={12}>
                                        <Grid
                                            container
                                            spacing={1}
                                            justify="space-evenly"
                                        >
                                            <Paper className="card_form_col" elevation={3}>
                                                <MCIcon />
                                                <TextField
                                                    label="Номер карты"
                                                    style={{
                                                        marginBottom: "20px",
                                                    }}
                                                    placeholder="0000 0000 0000 0000"
                                                    required
                                                />
                                                <DatePickerInput />
                                            </Paper>
                                            <Paper className="card_form_col" elevation={3}>
                                                <TextField
                                                    label="Имя владельца"
                                                    style={{
                                                        marginBottom: "20px",
                                                    }}
                                                    placeholder="CARD HOLDER"
                                                    required
                                                />
                                                <TextField
                                                    label="CVC"
                                                    placeholder="CVC"
                                                    required
                                                />
                                            </Paper>
                                            <Grid item xs={12}>
                                                <Button
                                                    style={{
                                                        marginTop: "40px",
                                                    }}
                                                    color="primary"
                                                    variant="contained"
                                                >
                                                    Сохранить
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </MainLayout>
    );
};

export default ProfilePage;
