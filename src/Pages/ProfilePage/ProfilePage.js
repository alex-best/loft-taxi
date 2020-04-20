import React, { useEffect } from "react";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import ProfileForm from "../../Components/ProfileForm/ProfileForm";
import { Grid, Paper } from "@material-ui/core";
import { setCardRequest, getCardRequest } from "./actions";
import { connect } from "react-redux";

import "./ProfilePage.scss";

const styles = {
    panel: {
        marginTop: "50px",
        width: "100%",
        textAlign: "center",
    },
    error: {
        display: "block",
        color: "crimson",
        marginBottom: "40px",
    },
};

const ProfilePage = (props) => {
    const {
        cardNumber,
        expiryDate,
        cardName,
        cvc,
        getCardRequest,
        token,
        success,
        error,
    } = props;

    useEffect(() => {
        getCardRequest(token);
    }, [token, getCardRequest]);

    const onSubmitHandler = (cardNumber, cardName, expiryDate, cvc) => {
        if (cardNumber && cardName && expiryDate && cvc) {
            const { setCardRequest } = props;
            setCardRequest({
                cardNumber,
                cardName,
                expiryDate,
                cvc,
                token: props.token,
            });
        }
    };

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
                            {error && <span style={styles.error}>{error}</span>}
                            {success && (
                                <ProfileForm
                                    onSubmit={onSubmitHandler}
                                    cardNumber={cardNumber}
                                    expiryDate={expiryDate}
                                    cardName={cardName}
                                    cvc={cvc}
                                />
                            )}
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </MainLayout>
    );
};

const mapStateToProps = (state) => {
    return {
        token: state.authReducer.token,
        ...state.profileReducer,
    };
};

const mapDispatchToProps = { setCardRequest, getCardRequest };

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
