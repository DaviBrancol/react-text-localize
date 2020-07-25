// MARK: React
import React from "react";
import { TextLocalizeProvider } from "react-text-localize";
// MARK: CSS
import "./App.css";
// MARK: Example Page
import { Page } from "./Page";

const App = () => {
  return (
    <TextLocalizeProvider locale="pt-br">
      <Page />
    </TextLocalizeProvider>
  );
};

export default App;
