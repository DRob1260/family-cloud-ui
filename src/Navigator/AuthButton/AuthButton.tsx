import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {Button, CircularProgress } from "@mui/material";

export const AuthButton: React.FunctionComponent = () => {
    const { isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();

    return (
        <div className={"AuthButton"}>
            {isLoading &&
                <CircularProgress />
            }
            {!isAuthenticated &&
                <Button onClick={() => loginWithRedirect()}>Login</Button>
            }
            {isAuthenticated &&
                <Button onClick={() => logout()}>Logout</Button>
            }
        </div>
    )
}
