import React, { ReactElement, createContext, useState } from "react";
import NotFound from "../../components/404";

interface RouterProps {
  children: ReactElement[];
}

const Router = ({ children }: RouterProps) => {
  const RouterContext = createContext("");
  const [path, setPath] = useState(window.location.pathname);
  window.addEventListener("popstate", () => {
    console.log("sdsd");
  });

  return <RouterContext.Provider value="">{}</RouterContext.Provider>;
};

export default Router;
