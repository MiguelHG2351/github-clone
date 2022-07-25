import Header from "~/components/container/Header";

export default function MainLayout({ children, Sidenav }) {
    return (
        <div className="grid md:grid-cols-[auto_1fr] grid-rows-[auto_1fr] box-border md:max-h-screen md:overflow-y-auto">
            <Header />
            <main>
                <Sidenav />
                {children}
            </main>
        </div>
    );
}
