import { ClientComponent } from "./client-comp";

function ServerComponent() {
  return (
    <>
      <div>Server component 2</div>

      <ClientComponent />
    </>
  );
}

export default ServerComponent;
