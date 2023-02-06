interface PortfolioItemProps {
    title: string;
    url: string;
    description?: string;
    thumbnail?: string;
    buttonText?: string;
}

export default function PortfolioItem(props: PortfolioItemProps) {
    return (
        <div class="flex flex-row mx-auto h-48 md:h-auto w-full p-2 border-1 rounded">
            <img class="rounded" src={props.thumbnail} />
            <div class="flex flex-col">
                <p class="m-2 sm:p-2 p-4 text-left font-semibold">{props.title}</p>
                <p class="mx-2 px-2 text-left text-sm">{props.description}</p>
                <a href={props.url} class="w-40 m-2 sm:p-2 p-4 text-center bg-indigo-100 rounded">{ props.buttonText ?? "Go to page" }</a>
            </div>
        </div>
    );
}