import React from "react";
import FirstSection from "./First-section";
import SecondSection from "./Second-section";
import { Provider } from "react-redux";
import { store } from "../store/store";

class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <Provider store={store}>
          <FirstSection />
          <SecondSection />
        </Provider>
      </main>
    );
  }
}

export default Main;
