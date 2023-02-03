interface LinkProps {
  title: string;
  url: string;
  extraStyles: string;
}

export function Link(props: LinkProps) {
  const classString =
    `transition ease-in-out duration-500 hover:underline hover:text-indigo-500 ${
      props.extraStyles ?? ""
    }`;
  return (
    <a
      href={props.url}
      class={classString}
    >
      {props.title}
    </a>
  );
}
