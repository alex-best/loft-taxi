export default {
    fetchAuthRequest: (action) => {
        return fetch("https://loft-taxi.glitch.me/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(action.payload),
        }).then((response) => response.json());
    },
    fetchRegRequest: (action) => {
        return fetch("https://loft-taxi.glitch.me/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(action.payload),
        }).then((response) => response.json());
    },
    fetchGetCardRequest: (token) => {
        return fetch(
            `https://loft-taxi.glitch.me/card?token=${token}`
        ).then((response) => response.json());
    },
    fetchSetCardRequest: (action) => {
        return fetch("https://loft-taxi.glitch.me/card", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(action.payload),
        }).then((response) => response.json());
    },
    fetchAddressList: () => {
        return fetch(
            "https://loft-taxi.glitch.me/addressList"
        ).then((response) => response.json());
    },
    fetchRoute: (action) => {
        const { from, where } = action.payload;
        return fetch(
            `https://loft-taxi.glitch.me/route?address1=${from}&address2=${where}`
        ).then((response) => response.json());
    }
};
