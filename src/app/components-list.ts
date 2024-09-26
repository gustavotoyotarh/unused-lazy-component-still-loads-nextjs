import dynamic from "next/dynamic";

const Component1 = dynamic(() => import("./components/component-1"));
const Component2 = dynamic(() => import("./components/component-2"));
const Component3 = dynamic(() => import("./components/component-3"));

export const components = {
  Component1,
  Component2,
  Component3,
};
