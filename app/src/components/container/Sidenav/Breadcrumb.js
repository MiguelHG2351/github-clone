import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';

export default function Breadcrumb() {
    const router = useRouter();
    const routes = router.pathname.split('/').slice(2);
    console.log(routes);

    return (
        <div className="breadcrumb p-2 h-11">
            <Link href="/">
                <a className="inline-block">
                    <svg
                        className="align-middle"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                    >
                        <path
                            d="M8.33335 16.6667V11.6667H11.6667V16.6667H15.8334V10H18.3334L10 2.5L1.66669 10H4.16669V16.6667H8.33335Z"
                            fill="#ACACAC"
                        />
                    </svg>
                </a>
            </Link>
            {routes.map((route, index) => (
                <React.Fragment key={index + route}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-4 w-4 inline-block align-middle"
                        aria-hidden="true"
                        fill="currentColor"
                    >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"></path>
                    </svg>
                    <span className="align-middle">{route}</span>
                </React.Fragment>
            ))}
        </div>
    );
}
