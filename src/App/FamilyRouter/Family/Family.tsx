import React from "react";
import {useParams} from "react-router-dom";

export const Family: React.FunctionComponent = () => {
    const { familyCode } = useParams<{familyCode: string}>();

    return (
        <div className={"Family"}>
            {familyCode}
        </div>
    )
}
