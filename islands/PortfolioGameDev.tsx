import Project from "../classes/Project.tsx";
import PortfolioContainer from "../components/PortfolioContainer.tsx";

export default function PortfolioGameDev() {
  const projects: Project[] = BuildProjects();
  // console.log(projects);
  return (
    <PortfolioContainer
      title="Game Development"
      items={projects}
     />
  );
}

function BuildProjects() : Project[] {
  const projects: Project[] = [];

  let project = new Project("", "");
  project.title = "Shooter 2D Unity demo";
  project.url = "https://astronautpotato.itch.io/shooter-2d-demo";
  project.description = "A small demo of a 2d shooter, created in Unity, for a class project.";
  project.thumbnail = "/img/shooter-2d-demo.png";
  project.buttonText = "Play on itch.io";

  projects.push(project);

  project = new Project("", "");
  project.title = "Medical Showdown";
  project.url = "https://astronautpotato.itch.io/medical-showdown";
  project.description = "A demo of a 2D platform shooter where you have to destroy viruses. Inspired by MegaMan games.";
  project.thumbnail = "/img/medical-showdown.png";
  project.buttonText = "Play on itch.io";

  projects.push(project);

  project = new Project("", "");
  project.title = "Come Back Next Week";
  project.url = "https://globalgamejam.org/2020/games/come-next-week-5";
  project.description = "Game created for the Global Game Jam 2020, where you are a therapist and have to explore your patient's troubled mind, using puzzles you need to solve with cards.";
  project.thumbnail = "/img/comebacknextweek.png";
  project.buttonText = "Go to GGJ page";

  projects.push(project);

  return projects;
}