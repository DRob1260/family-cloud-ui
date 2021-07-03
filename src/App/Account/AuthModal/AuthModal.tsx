import React, {useState} from 'react';
import "./AuthModal.scss";
import {AppBar, Tab, Tabs, Box, Typography, Paper, } from '@material-ui/core';
import Modal from "react-modal";
import {AuthForm} from './AuthForm/AuthForm';
import { firebase } from "../../../firebase";

type LoginType = {
    open: boolean;
    setOpen?: (isOpen: boolean) => void
}

export const AuthModal: React.FunctionComponent<LoginType> = ({ open, setOpen }) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleTabChange = (event: React.ChangeEvent<any>, newValue: number) => {
        setSelectedTab(newValue);
    }
    const handleEmailChange = (email: string) => setEmail(email);
    const handlePasswordChange = (password: string) => setPassword(password);

    const handleSubmit = () => {
        if(selectedTab === 0) {
            console.log("logging in")
            firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
                console.log(user);
            }).catch(error => {
                console.log("Error loggin in: ", error.message);
            });
        } else {
            console.log("signing up")
            firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
                console.log(user);
            }).catch(error => {
                console.log("Error signing up: ", error.message);
            });
        }
    }

    return (
        <div className={"AuthModal"}>
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
                <div className={"AuthModal-content"}>
                    <Paper>
                        <AppBar position={"static"}>
                            <Tabs value={selectedTab} onChange={handleTabChange} aria-label={"select log in or sign up"}>
                                <Tab label={"Log In"} id={"tab-0"} aria-controls={"tabpanel-0"} />
                                <Tab label={"Sign Up"} id={"tab-1"} aria-controls={"tabpanel-1"} />
                            </Tabs>
                        </AppBar>
                        <TabPanel value={selectedTab} index={0}>
                            <Typography>Log into an existing account:</Typography>
                            <AuthForm
                                email={email}
                                setEmail={handleEmailChange}
                                password={password}
                                setPassword={handlePasswordChange}
                                submit={handleSubmit}
                            />
                        </TabPanel>
                        <TabPanel value={selectedTab} index={1}>
                            <Typography>Sign up for a new account:</Typography>
                            <AuthForm
                                email={email}
                                setEmail={handleEmailChange}
                                password={password}
                                setPassword={handlePasswordChange}
                                submit={handleSubmit}
                            />
                        </TabPanel>
                    </Paper>
                </div>
            </Modal>
        </div>
    )
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

const TabPanel: React.FunctionComponent<TabPanelProps> = ({value, index, children}) => {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}
