import axios from "axios";

export const mainApiClient = axios.create({
    baseURL: "https://staging.juanflix.com.ph/api/v1/",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer juanflix_p6!Xu28KqUa1hvn0aURUrcfE9eg=UE5/0btt5SYcn7mSVorjshu=Z1m`,
    },
});

export const rawApiClient = axios.create({
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});
