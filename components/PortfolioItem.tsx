import Button from "./Button.tsx"
import LinkButton from "./LinkButton.tsx"

interface PortfolioItemProps {
    title: string;
    url: string;
    description?: string;
    thumbnail?: string;
    buttonText?: string;
}

export default function PortfolioItem(props: PortfolioItemProps) {
    return (
        <div class="flex flex-col sm:flex-row mx-auto h-auto sm:h-48 w-1/2 sm:w-full p-2 border-1 rounded">
            <img class="rounded max-w-max" src={props.thumbnail} />
            <div class="flex flex-col">
                <p class="m-2 sm:p-2 p-4 text-left font-semibold">{props.title}</p>
                <p class="mx-2 px-2 text-left text-sm hidden sm:block break-words">{props.description}</p>
                <LinkButton class="mx-3 my-1" href={props.url}>{ props.buttonText ?? "Go to page" }</LinkButton>
            </div>
        </div>
    );
}