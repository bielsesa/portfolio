interface NavRouteProps {
    title: string;
    url: string;
}

export function NavRoute(props: NavRouteProps) {
    return (
        <a href={props.url} class="m-2 sm:p-2 p-4 text-center hover:bg-indigo-100 hover:rounded">{props.title}</a>
    );
}