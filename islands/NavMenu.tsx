import { NavRoute } from "../components/NavRoute.tsx";

export default function NavMenu() {
    return (
        <main class="max-w-screen-md mx-auto">
            <div class="grid grid-cols-3 mx-auto">
                <NavRoute url={"/"} title="Home" />
                <NavRoute url={"/about"} title="About" />
                <NavRoute url={"/portfolio"} title="Portfolio" />
            </div>
        </main>
    );
}