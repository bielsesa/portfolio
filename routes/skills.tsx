import Header from "../islands/Header.tsx";
import Footer from "../islands/Footer.tsx";
import NavMenu from "../islands/NavMenu.tsx";

export default function SkillsPage() {
  return (
    <>
      <Header />
      <NavMenu />
      <div class="p-4 mx-auto max-w-screen-sm sm:max-w-screen-lg">
        <p>Skills</p>
      </div>
      <Footer />
    </>
  );
}
