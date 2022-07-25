import Link from 'next/link';

export default function Sidenav() {
    return (
        <section className="options flex-col-reverse bg-light-blue flex items-stretch justify-between sticky md:static">
            <div className="breadcrumb p-2">
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
                <span className='align-middle'>Dashboard</span>
            </div>
            <div className="options-container flex">
                <div className="empty w-11 h-11 md:w-0"></div>
                <div className="list-options p-2 bg-gray-blue border-b border-red-800 flex-1 md:border-none">
                    <button className="rounded-full border-none bg-transparent text-gray-light hover:bg-blue-50 hover:text-blue-700 active:shadow-innerLink active:text-blue-700 disabled:text-cool-gray-500 px-2 text-xs h-6 whitespace-nowrap  focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="inline-block h-5 w-5"
                            aria-hidden="true"
                            fill="currentColor"
                        >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355z"></path>
                        </svg>
                    </button>
                    <button className="rounded-full border-none bg-transparent text-cool-gray-500 text-gray-light hover:bg-blue-50 hover:text-blue-700 active:shadow-innerLink active:text-blue-700 disabled:text-cool-gray-500 px-2 text-xs h-6 whitespace-nowrap  focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="inline-block h-5 w-5"
                            aria-hidden="true"
                            fill="currentColor"
                        >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M15 2a4 4 0 0 1 3.464 6.001L23 8v2h-2v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10H1V8l4.536.001A4 4 0 0 1 12 3.355 3.983 3.983 0 0 1 15 2zm-4 8H5v9h6v-9zm8 0h-6v9h6v-9zM9 4a2 2 0 0 0-.15 3.995L9 8h2V6a2 2 0 0 0-1.697-1.977l-.154-.018L9 4zm6 0a2 2 0 0 0-1.995 1.85L13 6v2h2a2 2 0 0 0 1.995-1.85L17 6a2 2 0 0 0-2-2z"></path>
                        </svg>
                    </button>
                    <button className="rounded-full border-none bg-transparent text-cool-gray-500 text-gray-light hover:bg-blue-50 hover:text-blue-700 active:shadow-innerLink active:text-blue-700 disabled:text-cool-gray-500 px-2 text-xs h-6 whitespace-nowrap  focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="h-5 w-5 inline-block"
                            aria-hidden="true"
                            fill="currentColor"
                        >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M20 17h2v2H2v-2h2v-7a8 8 0 1 1 16 0v7zm-2 0v-7a6 6 0 1 0-12 0v7h12zm-9 4h6v2H9v-2z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
