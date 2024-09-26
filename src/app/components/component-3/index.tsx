import { ClientComponent } from "./client-comp";

function ServerComponent() {
  return (
    <>
      <div>Server component 3</div>

      <ClientComponent />
    </>
  );
}

export default ServerComponent;
