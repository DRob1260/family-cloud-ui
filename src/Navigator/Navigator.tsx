import React from 'react';
import './Navigator.scss';
import { AppBar, Button, Toolbar } from '@mui/material';

export const Navigator: React.FunctionComponent = () => {
    return (
        <div className={'Navigator'}>
            <AppBar>
                <Toolbar>
                    {/*todo: there's probably a better way to navigate to be friendly with react-router-dom*/}
                    <Button variant={'text'} href={'/family-cloud'}>
                        Family Cloud 🌥
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};
