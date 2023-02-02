import { Handlers } from "$fresh/server.ts";
import Header from "../islands/Header.tsx";
import NavMenu from "../islands/NavMenu.tsx";
import ContactForm from "../islands/ContactForm.tsx";

export const handler: Handlers = {
    async GET(req, ctx) {
        const resp = await ctx.render();
        resp.headers.set("X-Custom-Header", "Hello");
        return resp;
    }
}

// this is ctx.render
export default function AboutPage() {
    return (
        <>
            <Header />
            <NavMenu />
            <div class="p-4 mx-auto max-w-screen-md">
                <p>Yada yada</p>
                <ContactForm />
            </div>
        </>  
    );
}