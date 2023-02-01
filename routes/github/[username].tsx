import { Handlers, PageProps } from "$fresh/server.ts";

interface User {
    login: string;
    name: string;
    avatar_url: string;
}

// recoge los datos del usuario que se pasa por parametro en la url
// funcionamiento (de la pag. de fresh):
// *****
// The data is first fetched inside of the handler by making an API call to GitHub. 
// If the API call succeeds, the data is passed to the page component.
// If the API call fails, the page component is rendered with null as the data.
// The page component grabs the data from the props and renders it.
// *****
export const handler: Handlers<User | null> = {
    async GET(_, ctx) {
        const { username } = ctx.params;
        const resp = await fetch(`https://api.github.com/users/${username}`);
        if (resp.status === 404) {
            return ctx.render(null);
        }
        const user: User = await resp.json();
        return ctx.render(user);
    }
}

export default function Page({ data }: PageProps<User | null>) {
    if (!data) {
        return <h1>User not found</h1>;
    }

    return (
        <div class="container mx-auto m-1 p-2 rounded shadow bg-gradient-to-r from-blue-300 via-indigo-600 to-purple-900 font-mono text-white tracking-tight">
            <img src={data.avatar_url} />
            <h1>{data.name}</h1>
            <p>@{data.login}</p>
        </div>
    );
}