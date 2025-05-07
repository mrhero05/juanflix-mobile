import axios from "axios";

export const mainApiClient = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_TOKEN}`,
    },
});

export const rawApiClient = axios.create({
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});
