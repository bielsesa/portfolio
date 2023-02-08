import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={/*!IS_BROWSER ||*/ props.disabled}
      class={`px-3 py-2 bg-white rounded border(indigo-500 2) hover:bg-indigo-200 active:bg-indigo-300 disabled:(opacity-50 cursor-not-allowed) ${
        props.class ?? ""
      }`}
    />
  );
}

export default Button;