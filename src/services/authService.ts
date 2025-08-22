/* eslint-disable @typescript-eslint/no-explicit-any */

import { useAccountStore } from "@/stores/accountsStore";
import axios from "axios";

export async function loginService(email: string, password: string) {
    return await axios.post<any>('https://api.codingthailand.com/api/login', {
        email: email,
        password: password
    });
}

export function logoutService(): void {
    useAccountStore.getState().reset(); // reset all state (memory)
    useAccountStore.persist.clearStorage(); // reset all state (storage)
}

export async function getProfileService() {
    const token =  useAccountStore.getState().token; // get global token state (zustand)
    if (!token?.access_token) {
        throw new Error('token not found');
    }

    return await axios.get<any>('https://api.codingthailand.com/api/profile', {
        headers: { 'Authorization': 'Bearer ' +  token.access_token }
    });
}

