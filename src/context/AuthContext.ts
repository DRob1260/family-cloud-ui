import {createContext} from "react";
import firebase from "firebase/app";

export const AuthContext = createContext<{
    user: firebase.User | null;
    setUser: (user: firebase.User | null) => void;
    showAuthModal: boolean;
    setShowAuthModal: (show: boolean) => void;
}>({
    user: null,
    setUser: (user) => { /* do nothing */ },
    showAuthModal: false,
    setShowAuthModal: (show) => { /* do nothing */ }
});
