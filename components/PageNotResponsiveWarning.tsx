import IconAlertTriangle from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/alert-triangle.tsx";

export default function PageNotResponsiveWarning() {
  return (
    <p class="p-2 font-semibold block rounded bg-indigo-200 max-w-max">
      <IconAlertTriangle class="w-6 h-6 inline-block" />{" "}
      Currently, this page is NOT responsive in mobile devices! Sorry, working
      on it! <IconAlertTriangle class="w-6 h-6 inline-block" />
    </p>
  );
}
