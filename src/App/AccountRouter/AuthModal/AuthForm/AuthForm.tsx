import React from "react";
import {Button, TextField} from '@material-ui/core';

export const AuthForm: React.FunctionComponent<{
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
    submit: () => void
}> = ({email, setEmail, password, setPassword, submit}) => {
    return (
        <div>
            <div>
                <TextField
                    required={true}
                    id={"email"}
                    label={"Email"}
                    type={"email"}
                    defaultValue={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div>
                <TextField
                    required={true}
                    id={"password"}
                    label={"Password"}
                    type={"password"}
                    defaultValue={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <div>
                <Button
                    variant={"contained"}
                    color={"primary"}
                    disabled={!email || !password} /* todo: add proper validation for email/password */
                    onClick={submit}
                >
                    Submit
                </Button>
            </div>
        </div>
    )
}
