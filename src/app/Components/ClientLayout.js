"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';


import Spinner from './Spinner';

import React from 'react'

const ClientLayout = ({ children }) => {

    const [loading, setLoading] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleRouteChange = () => {
            setLoading(true);
            setTimeout(() => setLoading(false), 600);
        };

        handleRouteChange(); // Handle the initial load

        // Listen for route changes
        const handlePathChange = () => handleRouteChange();
        window.addEventListener('popstate', handlePathChange);

        return () => {
            window.removeEventListener('popstate', handlePathChange);
        };
    }, [pathname]);

    return (
        <>
            {loading && <Spinner />}
            {children}
        </>
    );
}

export default ClientLayout