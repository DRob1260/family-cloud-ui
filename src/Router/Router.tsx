import React from "react";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import {Navigator} from "../Navigator/Navigator";
import {Home} from "../Home/Home";

export const Router: React.FunctionComponent = () => {
    return (
        <div className={"Router"}>
            <BrowserRouter>
                <Navigator />
                <Routes>
                    <Route path={"/family-cloud"} element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
