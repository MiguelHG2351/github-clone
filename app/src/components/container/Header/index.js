import Link from "next/link"
import { useState } from "react"

import classNames from "classnames"
import Image from "next/future/image"

export default function Header() {
    const [isOpen, setIsOpen] = useState({
        isOpen: false,
        isFirstClosed: false,
    })
    
    const headerClass = classNames("h-screen box-border z-20 bg-blue-dark w-auto", {
        "translate-x-0": isOpen.isOpen,
        "fixed md:static": !isOpen.isOpen,
        "transition-transform ": isOpen.isFirstClosed,
    })

    return (
        <header className={headerClass}>
            <button aria-hidden className="border-none absolute -right-11 bg-blue-dark text-white w-11 max-h-11 h-11 md:hidden">
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
            <div className="header-logo border-b border-red-800 text-white h-11 px-4 box-border flex items-center">
                <span className="inline-block">
                    <Image className="inline-block align-middle mr-4" width={24} height={24} src="/images/logo-dark.png" alt="logo" />
                    Github Clone
                </span>
            </div>
            <ul className="list-options">
                <li>
                    <Link href="/about">
                        <a>
                            About
                        </a>
                    </Link>
                </li>
            </ul>
        </header>
    )
}