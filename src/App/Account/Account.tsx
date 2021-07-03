import React, {useState} from 'react';
import { AuthContext } from "../../context/AuthContext";

export const Account: React.FunctionComponent = () => {
    return (
        <AuthContext.Consumer>
            {authContext => (
                <div className={"Account"}>
                    {authContext.user &&
                        <div>Welcome, {authContext.user.email}</div>
                    }
                    {!authContext.user && authContext.setShowAuthModal(true)}
                </div>
            )}
        </AuthContext.Consumer>
    )
}
