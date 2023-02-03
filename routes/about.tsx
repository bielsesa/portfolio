import { Handlers } from "$fresh/server.ts";
import Header from "../islands/Header.tsx";
import Footer from "../islands/Footer.tsx";
import NavMenu from "../islands/NavMenu.tsx";
import ContactForm from "../islands/ContactForm.tsx";
import { Link } from "../components/Link.tsx";

export const handler: Handlers = {
  async GET(req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

// this is ctx.render
export default function AboutPage() {
  return (
    <>
      <Header />
      <NavMenu />
      <div class="p-4 mx-auto max-w-screen-lg">
        <p class="py-5 font-semibold">
          Hi! My name is Biel, and I am currently working as a software
          developer in Barcelona, Spain.
        </p>
        <p class="py-3">
          I am non-binary, and use both{" "}
          <span class="text-indigo-500">they/them</span>
          {" "}and{" "}<span class="text-indigo-500">he/him</span>{" "}
          pronouns (masculine pronouns mainly in Spanish).
        </p>
        <p class="py-2">
          My true wish is to work as a game developer. Alongside my job, I am
          enrolled in an Associate Degree where we study the various tasks a
          game developer must do in their day to day work.
        </p>
        <p class="py-2">
          I am attending{" "}
          <Link
            extraStyles="transition ease-in-out duration-500 hover:underline hover:text-indigo-500 sm:text-indigo-500 sm:underline"
            url="https://www.cevbarcelona.com/formacion-a-distancia/cfgs-en-animaciones-3d-juegos-y-entornos-interactivos-a-distancia/"
            title="CEV - Centre de Comucació, Imatge i So."
          />
        </p>
        <p class="py-3">
          I speak Spanish and Catalan natively, have an upper-intermediate level
          in English, and a beginner level in Japanese. I love learning new
          languages, I think it is really interesting how differently languages
          can work.
        </p>
        <p class="font-semibold pt-5">
          If you could support me, it would be wonderful! Thank you!
        </p>
        <div class="py-2">
          <script
            type="text/javascript"
            src="https://storage.ko-fi.com/cdn/widget/Widget_2.js"
          >
          </script>
          <script type="text/javascript">
            kofiwidget2.init('Support Me on Ko-fi', '#663931',
            'Q5Q76WDM');kofiwidget2.draw();
          </script>
        </div>
        {/* <ContactForm /> */}
      </div>
      <Footer />
    </>
  );
}
