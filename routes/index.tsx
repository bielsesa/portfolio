import Counter from "../islands/Counter.tsx";
import Header from "../islands/Header.tsx";
import NavMenu from "../islands/NavMenu.tsx";

export default function Home() {
  return (
    <>
      <Header />
      <NavMenu />
      <div class="p-4 mx-auto max-w-screen-md">
        <p>Welcome to my personal page!</p>
      </div>
    </>
  );
}
