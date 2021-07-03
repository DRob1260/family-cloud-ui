import {createContext} from "react";
import firebase from "firebase/app";

export const AuthContext = createContext<{
    user: firebase.User | undefined;
    setUser: (user: firebase.User | undefined) => void;
    showAuthModal: boolean;
    setShowAuthModal: (show: boolean) => void;
}>({
    user: undefined,
    setUser: (user) => { /* do nothing */ },
    showAuthModal: false,
    setShowAuthModal: (show) => { /* do nothing */ }
});
