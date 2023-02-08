import IconAlertTriangle from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/alert-triangle.tsx";

interface WarningProps {
  text: string;
}

export default function Warning(props: WarningProps) {
  return (
    <p class="p-2 font-semibold block rounded bg-indigo-200 max-w-max">
      <IconAlertTriangle class="w-6 h-6 inline-block mr-1" />{props.text}
      <IconAlertTriangle class="w-6 h-6 inline-block ml-1" />
    </p>
  );
}
