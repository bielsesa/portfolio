import { NavRoute } from "../components/NavRoute.tsx";

export default function NavMenu() {
    return (
        <main class="max-w-screen-md mx-auto bg-indigo-100 sm:bg-transparent">
            <div class="grid grid-cols-3 mx-auto">
                <NavRoute url={"/"} title="Home" class="border-r border-white sm:border-r-0"/>
                <NavRoute url={"/about"} title="About" />
                <NavRoute url={"/skills"} title="Skills" />
                <NavRoute url={"/portfolio"} title="Portfolio" class="border-l border-white sm:border-l-0" />
            </div>
        </main>
    );
}