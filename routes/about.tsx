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
            <h1>About</h1>
            <p>this is the about page.</p>
            <ContactForm />
        </>  
    );
}