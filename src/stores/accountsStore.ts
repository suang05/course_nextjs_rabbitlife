// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// type AccountToken = {
//   access_token: string;
//   token_type: string;
//   expires_in: number;
// };

// // user's profile from backend
// type Account = {
//   id: number;
//   name: string;
//   email: string;
//   role: string;
// };

// type AccountState = {
//   account: Account | null;
//   isLoginLoading: boolean;
//   token: AccountToken | null;
// };

// type AccountAction = {
//   setAccount: (account: Account) => void;
//   setIsLoginLoading: (loading: boolean) => void;
//   setToken: (token: AccountToken) => void;
//   reset: () => void;
// };

// // define init state
// const initState: AccountState = {
//   account: null,
//   isLoginLoading: true,
//   token: null,
// };

// export const useAccountStore = create<AccountState & AccountAction>()(
//   persist(
//     (set) => ({
//       ...initState,
//       setAccount: (account) => set({ account: account }),
//       setIsLoginLoading: (loading) => set({ isLoginLoading: loading }),
//       setToken: (token) => set({ token: token }),
//       reset: () => set(initState),
//     }),
//     { 
//         name: "account-storage",
//         partialize: (state) => ({
//             token: state.token, // เลือกเก็บ token อย่างเดียว
//         }),
//     }
//   )
// );

// add encrypt and decrypt token

import { create } from "zustand";
import { persist } from "zustand/middleware";
import CryptoJS from 'crypto-js';

type AccountToken = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

// user's profile from backend
type Account = {
  id: number;
  name: string;
  email: string;
  role: string;
};

type AccountState = {
  account: Account | null;
  isLoginLoading: boolean;
  token: AccountToken | null;
};

type AccountAction = {
  setAccount: (account: Account) => void;
  setIsLoginLoading: (loading: boolean) => void;
  setToken: (token: AccountToken) => void;
  reset: () => void;
};

// define init state
const initState: AccountState = {
  account: null,
  isLoginLoading: true,
  token: null,
};

// คีย์ลับห้ามเก็บไว้ที่ client ควรเก็บที่ server
const SECRET_KEY = "n948bA4f2GbyP7SHcTKo7ta4yotkgUXE";

export const useAccountStore = create<AccountState & AccountAction>()(
  persist(
    (set) => ({
      ...initState,
      setAccount: (account) => set({ account: account }),
      setIsLoginLoading: (loading) => set({ isLoginLoading: loading }),
      setToken: (token) => set({ token: token }),
      reset: () => set(initState),
    }),
    { 
        name: "account-storage",
        partialize: (state) => ({
            token: state.token, // เลือกเก็บ token อย่างเดียว
        }),
        storage: {
          setItem: (name, value) => {
            const json = JSON.stringify(value);
            const encrypted = CryptoJS.AES.encrypt(json, SECRET_KEY).toString();
            localStorage.setItem(name, encrypted);
          },
          getItem: (name) => {
            const encrypted = localStorage.getItem(name);
            if (!encrypted) return null;
            const bytes = CryptoJS.AES.decrypt(encrypted, SECRET_KEY);
            const decrypted = bytes.toString(CryptoJS.enc.Utf8);
            return JSON.parse(decrypted);
          },
          removeItem: (name) => {
            localStorage.removeItem(name);
          }
        }
    }
  )
);
