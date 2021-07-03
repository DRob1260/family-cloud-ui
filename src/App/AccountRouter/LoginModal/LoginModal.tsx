import React, {useState} from 'react';
import "./LoginModal.scss";
import {TextField, Typography, Paper, Button} from '@material-ui/core';
import Modal from "react-modal";

type LoginType = {
    open: boolean;
    setOpen?: (isOpen: boolean) => void
}

export const LoginModal: React.FunctionComponent<LoginType> = ({ open, setOpen }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className={"LoginModal"}>
            <Modal
                isOpen={open}
                onRequestClose={setOpen ? () => setOpen(false) : undefined}
                contentLabel={"Login"}
                style={{
                    content: {
                        top: "50%",
                        left: "50%",
                        bottom: "auto",
                        right: "auto",
                        marginRight: "-50%",
                        transform: "translate(-50%, -50%)",
                        margin: 0,
                        borderStyle: "none"
                    }
                }}
            >
                <div className={"LoginModal-content"}>
                    <Paper>
                        <Typography variant={"h4"} component={"h1"}>Login</Typography>
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
                           >
                               Submit
                           </Button>
                       </div>
                    </Paper>
                </div>
            </Modal>
        </div>
    )
}
