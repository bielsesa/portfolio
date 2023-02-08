import { JSX } from "preact";

export default function LinkButton(
  props: JSX.HTMLAttributes<HTMLAnchorElement>,
) {
  return (
    <a
        {...props}
        disabled={props.disabled}
        class={`inline-block max-w-max cursor-pointer px-3 py-2 bg-white rounded border(indigo-500 2) hover:bg-indigo-200 active:bg-indigo-300 disabled:(opacity-50 cursor-not-allowed) ${
        props.class ?? ""
      }`}
    />
  );
}
