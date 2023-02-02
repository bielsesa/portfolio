import Header from "../islands/Header.tsx";
import Footer from "../islands/Footer.tsx";
import NavMenu from "../islands/NavMenu.tsx";

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <NavMenu />
      <div class="p-4 mx-auto max-w-screen-md">
        <p class="pb-2">Here you can see some of my personal projects.</p>
        <div class="grid grid-flow-row p-1 mx-auto max-w-screen-md">
          <iframe
            class="rounded-lg m-2 mx-auto"
            src="https://itch.io/embed/669926?link_color=663931"
            width="552"
            height="167"
            frameBorder="0"
          >
            <a href="https://astronautpotato.itch.io/medical-showdown">
              Medical Showdown by astronautpotato
            </a>
          </iframe>
          <iframe
            class="rounded-lg m-2 mx-auto"
            src="https://itch.io/embed/1905682?link_color=663931"
            width="552"
            height="167"
            frameBorder="0"
          >
            <a href="https://astronautpotato.itch.io/shooter-2d-demo">
              Shooter 2D demo by astronautpotato
            </a>
          </iframe>
        </div>
      </div>
      <Footer />
    </>
  );
}
