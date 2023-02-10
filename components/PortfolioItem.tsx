import LinkButton from "./LinkButton.tsx"
import Project from "../classes/Project.tsx"

// interface PortfolioItemProps {
//     title: string;
//     url: string;
//     description?: string;
//     thumbnail?: string;
//     buttonText?: string;
//     display?: string;
// }

export default function PortfolioItem(props: Project) {
    return (
        <div class={`flex flex-col sm:flex-row mx-auto h-auto sm:h-48 w-3/5 sm:w-full p-2 border-1 rounded ${props.display ?? ''}`}>
            <img class="rounded max-w-max mx-auto sm:m-0" src={props.thumbnail} />
            <div class="flex flex-col space-y-1 sm:space-y-4 mx-auto sm:mx-0">
                <p class="mb-0 sm:mb-2 ml-2 sm:p-2 p-4 text-left font-semibold">{props.title}</p>
                <p class="mx-2 px-2 text-left text-sm hidden sm:block break-words">{props.description}</p>
                <LinkButton class="mx-auto sm:mx-3 my-1" href={props.url}>{ props.buttonText ?? "Go to page" }</LinkButton>
            </div>
        </div>
    );
}