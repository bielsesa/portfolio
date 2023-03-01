import Header from "../islands/Header.tsx";
import Footer from "../islands/Footer.tsx";
import NavMenu from "../islands/NavMenu.tsx";
import PortfolioGameDev from "../islands/PortfolioGameDev.tsx";
import data from "../data/data.json" assert { type: "json" };

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <NavMenu />
      <div class="p-4 mx-auto max-w-screen-lg">
        <p class="pb-2">Here you can see some of my personal projects.</p>
        <PortfolioGameDev />
      </div>
      {/* <script src="https://kit.fontawesome.com/ee625d34b1.js" crossOrigin="anonymous"></script> */}
      <Footer />
    </>
  );
}
