import React from 'react';
import './Navigator.scss';
import { AppBar, Button, Toolbar } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import { AuthButton } from './AuthButton/AuthButton';

export const Navigator: React.FunctionComponent = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <div className={'Navigator'}>
            <AppBar>
                <Toolbar>
                    {/*todo: there's probably a better way to navigate to be friendly with react-router-dom*/}
                    <Button variant={'text'} href={'/family-cloud'}>
                        Family Cloud 🌥
                    </Button>
                    <AuthButton />
                </Toolbar>
            </AppBar>
        </div>
    );
};
