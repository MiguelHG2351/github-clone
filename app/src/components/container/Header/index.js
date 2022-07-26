import Link from 'next/link';
import { useState } from 'react';

import classnames from 'classnames';
import Image from 'next/future/image';

import ProfileHeader from './Profile';

export default function Header() {
    const [openMenu, setOpenMenu] = useState({
        isOpen: false,
        isFirstOpen: false,
    });

    function toggleMenu() {
        console.log(!openMenu.isFirstOpen && true);
        if (openMenu.isFirstOpen) {
            setOpenMenu({
                ...openMenu,
                isOpen: !openMenu.isOpen,
            });
        } else {
            setOpenMenu({
                isFirstOpen: true,
                isOpen: !openMenu.isOpen,
            });
        }
    }

    const headerClass = classnames(
        'fixed box-border flex flex-col justify-between  h-screen z-20 bg-blue-dark overflow-y-auto w-auto md:static',
        {
            'translate-x-0': openMenu.isOpen,
            '-translate-x-full md:translate-x-0': !openMenu.isOpen,
            'transition-transform': openMenu.isFirstOpen,
        }
    );

    const buttonMenuClass = classnames(
        'border-none -right-11 bg-blue-dark text-white w-11 max-h-11 h-11 md:hidden',
        {
            absolute: !openMenu.isOpen,
            static: openMenu.isOpen,
        }
    );

    return (
        <header className={headerClass}>
            <div className="top-header">
                <div className="header-logo border-b border-red-800 text-white h-11 px-2 box-border flex gap-x-8 items-center justify-between">
                    <span className="inline-block text-sm pl-2">
                        <Image
                            className="inline-block align-middle mr-4"
                            width={24}
                            height={24}
                            src="/images/logo-dark.png"
                            alt="logo"
                        />
                        Github Clone
                    </span>
                    <button
                        onClick={toggleMenu}
                        aria-hidden
                        className={buttonMenuClass}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="h-5 w-5 inline-block"
                            aria-hidden="true"
                            fill="currentColor"
                        >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z"></path>
                        </svg>
                    </button>
                </div>
                <ul className="list-options list-none px-2 my-0">
                    <li className="bg-gray-state p-3">
                        <Link href="/">
                            <a className="inline-block no-underline text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="h-4.5 w-4.5 inline-block align-middle mr-4"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9zm-9-7v6h2v-6h-2z"></path>
                                </svg>
                                <span className="inline-block align-middle">
                                    Home
                                </span>
                            </a>
                        </Link>
                    </li>
                    <li className="p-3">
                        <Link href="/">
                            <a className="inline-block no-underline text-gray-light">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="h-4.5 w-4.5 inline-block align-middle mr-4"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M13 21V11h8v10h-8zM3 13V3h8v10H3zm6-2V5H5v6h4zM3 21v-6h8v6H3zm2-2h4v-2H5v2zm10 0h4v-6h-4v6zM13 3h8v6h-8V3zm2 2v2h4V5h-4z"></path>
                                </svg>
                                <span className="inline-block align-middle">
                                    Dashboard
                                </span>
                            </a>
                        </Link>
                    </li>
                    <li className="p-3">
                        <Link href="/">
                            <a className="inline-block no-underline text-gray-light">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="h-4.5 w-4.5 inline-block align-middle mr-4"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z"></path>
                                </svg>
                                <span className="inline-block align-middle">
                                    Registries
                                </span>
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
            <ProfileHeader animate={openMenu.isFirstOpen} />
        </header>
    );
}
