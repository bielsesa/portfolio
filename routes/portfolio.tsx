import Header from "../islands/Header.tsx";
import NavMenu from "../islands/NavMenu.tsx";

export default function PortfolioPage() {
    return (
        <>
            <Header />
            <NavMenu />
            <h1>Portfolio</h1>
            <p>Here you can see some of my personal projects</p>
            <div class="flex">
                <iframe src="https://itch.io/embed/669926?bg_color=222222&amp;fg_color=eeeeee&amp;border_color=363636" width="208" height="167" frameBorder="0">
                    <a href="https://astronautpotato.itch.io/medical-showdown">Medical Showdown by astronautpotato</a>
                </iframe>
            </div>
        </>  
    );
}