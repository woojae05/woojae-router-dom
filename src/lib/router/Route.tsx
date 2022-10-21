import React from "react";
export interface RouteProps {
  path: string;
  component: JSX.Element;
}
const Route = ({ path, component }: RouteProps) => {
  return <div>Route</div>;
};

export default Route;
