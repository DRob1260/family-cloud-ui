import React from "react";
import {useParams} from "react-router-dom";
import {useGetFamilyQuery} from '../../graphql/generated/types';
import {CircularProgress, Link} from '@material-ui/core';
import {Alert} from '@material-ui/lab';

export const Family: React.FunctionComponent = () => {
    const { familyId } = useParams<{familyId: string}>();

    const { data, isLoading, isSuccess, isError } = useGetFamilyQuery({familyId: familyId});

    return (
        <div className={"Family"}>
            {isSuccess && data?.familyById &&
                <div>
                    <h1>{data.familyById.surname} Family</h1>
                    {data.familyById.familyEventConnections &&
                        <div>
                            <h2>Family Events</h2>
                            {data.familyById.familyEventConnections.map(event => {
                                return <Link key={event._id} href={`/family/${familyId}/event/${event._id}`}>{event.name}</Link>
                            })}
                        </div>
                    }
                </div>
            }
            {isLoading && <CircularProgress />}
            {isError && <Alert severity={"error"}>Whoops! Something went wrong. Please try again soon.</Alert> }
        </div>
    )
}
