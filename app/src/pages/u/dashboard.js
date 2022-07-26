import Head from 'next/head';
import UserLayout from '~/components/Layouts/User';

export default function Dashboard() {
    return (
        <>
            <Head>
                <title>GitHub clone</title>
            </Head>
            <div>
                <h1 className="text-lg m-0">Home</h1>
            </div>
        </>
    );
}

Dashboard.Layout = UserLayout;
