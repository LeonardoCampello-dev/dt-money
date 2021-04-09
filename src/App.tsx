import { Fragment } from "react";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";

import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <Fragment>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </Fragment>
  );
}
