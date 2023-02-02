import Header from "../islands/Header.tsx";
import Footer from "../islands/Footer.tsx";
import NavMenu from "../islands/NavMenu.tsx";

export default function Home() {
  return (
    <>
      <Header />
      <NavMenu />
      <div class="p-4 mx-auto max-w-screen-md">
        <p class="py-5 font-semibold">Welcome to my personal page!</p>
        <p>⚠ This is still a work in progress. ⚠</p>
        <p class="pt-2">
          I created this page to test out Fresh and Deno Deploy, and also
          because I've wanted to create my own portfolio for a long time. I will
          be testing many things out, hopefully, so there might be stuff that
          breaks or does not work currently.
        </p>
        <p class="font-semibold py-4">Thank you for your patience!</p>
      </div>
      <Footer />
    </>
  );
}
