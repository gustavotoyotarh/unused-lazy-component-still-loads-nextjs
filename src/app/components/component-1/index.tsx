import { ClientComponent } from "./client-comp";

function ServerComponent() {
  return (
    <>
      <div>Server component 1</div>

      <ClientComponent />
    </>
  );
}

export default ServerComponent;
