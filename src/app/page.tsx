import { components } from "./components-list";

export default function Home() {
  const Component = components["Component1"];

  return (
    <div>
      <Component />
    </div>
  );
}
