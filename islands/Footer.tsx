import { Link } from "../components/Link.tsx";

export default function Footer() {
  return (
    <div class="p-4 mx-auto max-w-screen-md font-mono">
      <div class="grid grid-flow-row">
        <h6 class="mx-auto text-center font-semibold py-2">
          Social media
        </h6>
        <div class="grid grid-flow-col">
          <Link
            extraStyles="text-center text-sm w-auto"
            url="https://www.instagram.com/astronautpotato/"
            title="Instagram"
          />
          <Link
            extraStyles="text-center text-sm w-auto"
            url="https://twitter.com/makooooooooooto"
            title="Twitter"
          />
          <Link
            extraStyles="text-center text-sm w-auto"
            url="https://www.artstation.com/astronautpotato"
            title="ArtStation"
          />
        </div>
      </div>
    </div>
  );
}
