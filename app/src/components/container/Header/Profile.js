import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/future/image';
import classNames from 'classnames';

export default function ProfileHeader({ animate }) {
    const [openMenu, setOpenMenu] = useState(false)

    const menuClass = classNames(
        "profile-options bg-gray-state overflow-hidden border-t border-black pl-0 my-0", {
            "max-h-[8.25rem]": openMenu,
            "max-h-0": !openMenu,
            "transition-[max-height]": animate,
        }
    )

    function profileHandler() {
        setOpenMenu(!openMenu)
    }
    
    return (
        <section className="bottom-header z-20 border-t border-red-800 text-gray-light bg-gray-state">
            <ul className={menuClass}>
                <li>
                    <Link href="/token">
                        <a className='block p-3 bg-blue-dark text-white no-underline'>
                            Access tokens
                        </a>
                    </Link>
                </li>
                <li className='p-3 text-white'> 
                    Profile settings
                </li>
                <li>
                    <a className='block p-3 text-white no-underline' href="/logout">
                        Logout
                    </a>
                </li>
            </ul>
            <div onClick={profileHandler} className="profile-info bg-gray-state relative flex items-center gap-2 px-2 py-4">
                <Image
                    className="rounded-full"
                    width={32}
                    height={32}
                    src="https://avatars.githubusercontent.com/u/60478285?v=4"
                />
                <div className="info-account">
                    <h3 className="my-0 text-sm text-white font-medium w-[14ch] whitespace-nowrap overflow-hidden text-ellipsis">
                        Miguel Hernández
                    </h3>
                    <span className="text-[12px] text-gray-light">
                        Account-Owner
                    </span>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-4.5 w-4.5 inline-block"
                    aria-hidden="true"
                    fill="currentColor"
                >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 8l6 6H6z"></path>
                </svg>
            </div>
        </section>
    );
}
