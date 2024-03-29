/* https://www.w3schools.com/howto/howto_js_dropdown.asp */
/* https://www.freecodecamp.org/news/how-to-build-a-dropdown-menu-with-javascript/ */

interface NavRouteProps {
  title: string;
  url: string;
  class?: string;
}

export function NavRoute(props: NavRouteProps) {
  return (
    <a
      href={props.url}
      class={`m-2 sm:p-2 p-4 text-center hover:bg-indigo-100 hover:rounded ${
        props.class ?? ""
      }`}
    >
      {props.title}
    </a>
  );
}
