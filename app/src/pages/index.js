import UserLayout from "~/components/Layouts/User";

export default function Home() {
    return (
        <div>
        <h1>Home</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quidem, quisquam.
        </p>
        </div>
    );
}

Home.Layout = UserLayout;
