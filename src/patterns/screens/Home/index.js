import React from "react";
import Content from "../../Content/Home";
import Footer from "../../Footer";
import Header from "../../Header";

export default function ScreenHome() {
  return (
    <React.Fragment>
      <Header />

      <main>
        <Content />
      </main>

      <Footer />
    </React.Fragment>
  );
}
