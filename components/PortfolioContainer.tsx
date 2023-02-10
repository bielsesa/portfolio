import PortfolioItem from "./PortfolioItem.tsx";
import Project from "../classes/Project.tsx"

interface PortfolioContainerProps {
    title: string;
    display?: string;
    items: Project[];
}

export default function PortfolioContainer(props: PortfolioContainerProps) {
    return (
        <div class="grid grid-flow-row p-1 mx-auto max-w-screen-md space-y-2 sm:space-y-3">
            {props.items.map((item) => {
                <PortfolioItem 
                    title={item.title}
                    url={item.url}
                    description={item.description}
                    thumbnail={item.thumbnail}
                    buttonText={item.buttonText}
                    display={item.display}
                />
            })}
        </div>
    );
}