import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-location';

export const Authenticated: React.FunctionComponent = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const urlPath = localStorage.getItem('family-cloud-url-path');
        const urlParams = localStorage.getItem('family-cloud-url-params');

        if (urlPath) {
            navigate({
                to: urlPath,
                search: location.parseSearch(urlParams || ''),
            });
        }
    }, [location, navigate]);

    return <div className={'Authenticated'} />;
};
