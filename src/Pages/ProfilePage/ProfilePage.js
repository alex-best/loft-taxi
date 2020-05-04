import React from "react";
import MainLayout from "../../Layout/MainLayout/";
import ProfileForm from "../../Components/ProfileForm/";
import { Grid, Paper } from "@material-ui/core";
import { setCardRequest, getCardRequest } from "../../Store/Profile/actions";
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
        isFetched,
        error,
    } = props;

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
        <MainLayout>
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
                            {isFetched && (
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
        token: state.auth.token,
        ...state.profile,
    };
};

const mapDispatchToProps = { setCardRequest, getCardRequest };

export default ProfilePage;

export const connectedProfilePage = connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
