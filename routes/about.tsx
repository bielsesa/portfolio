import { Handlers } from "$fresh/server.ts";

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
        <main>
            <h1>About</h1>
            <p>this is the about page.</p>
        </main>  
    );
}