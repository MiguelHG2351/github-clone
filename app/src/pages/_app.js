import { useEffect, useCallback } from 'react';

import '~/styles/global.css';
import MainLayout from '~/components/Layouts/MainLayout';
import Sidenav from '~/components/container/Sidenav';

export default function App({ Component, pageProps }) {
    useEffect(() => {
        window.addEventListener('beforeunload', () => {
            sessionStorage.clear()
        });
    }, []);

    return (
        <MainLayout Sidenav={Sidenav}>
            <Component {...pageProps} />
        </MainLayout>
    );
}
