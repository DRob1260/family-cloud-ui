import React from "react";
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import {Family} from './Family/Family';
import {FamilyEvent} from './Family/FamilyEvent/FamilyEvent';

export const FamilyRouter: React.FunctionComponent = () => {
    const {path} = useRouteMatch();

    return (
        <div className={"FamilyRouter"}>
            <Switch>
                <Route path={`${path}/:familyId/event/:familyEventId`}><FamilyEvent /></Route>
                <Route path={`${path}/:familyId`}><Family /></Route>
                <Route exact path={path}>
                    <div>Family page.</div>
                </Route>
            </Switch>
        </div>
    )
}
