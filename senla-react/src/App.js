import "./style.css";
import React from "react";
import All from "./pages/First-page";
import ThemProvider from "./providers/ThemProvider";
import Layout from "./components/Layout";

function App() {
  return (
    <ThemProvider>
      <Layout>
        <All />
      </Layout>
    </ThemProvider>
  );
}

export default App;
