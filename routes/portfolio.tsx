import Header from "../islands/Header.tsx";
import Footer from "../islands/Footer.tsx";
import NavMenu from "../islands/NavMenu.tsx";
import PortfolioItem from "../components/PortfolioItem.tsx";

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <NavMenu />
      <div class="p-4 mx-auto max-w-screen-lg">
        <p class="pb-2">Here you can see some of my personal projects.</p>
        <div class="grid grid-flow-row p-1 mx-auto max-w-screen-md">
          <PortfolioItem
            title="Shooter 2D Unity demo"
            url="https://astronautpotato.itch.io/shooter-2d-demo"
            description="A small demo of a 2d shooter, created in Unity, for a class project."
            thumbnail="/img/shooter-2d-demo.png"
            buttonText="Play on itch.io"
            />
          <PortfolioItem
            title="Medical Showdown"
            url="https://astronautpotato.itch.io/medical-showdown"
            description="A demo of a 2D platform shooter where you have to destroy viruses. Inspired by MegaMan games."
            thumbnail="/img/medical-showdown.png"
            buttonText="Play on itch.io"
          />
          <PortfolioItem
            title="Come Back Next Week"
            url="https://globalgamejam.org/2020/games/come-next-week-5"
            description="Game created for the Global Game Jam 2020, where you are a therapist and have to explore your patient's troubled mind, using puzzles you need to solve with cards."
            thumbnail="/img/comebacknextweek.png"
            buttonText="Go to GGJ page"
          />
        </div>
      </div>
      {/* <script src="https://kit.fontawesome.com/ee625d34b1.js" crossOrigin="anonymous"></script> */}
      <Footer />
    </>
  );
}
