import React from "react";
import Head from "../src/components/Head";
import ScreenHome from "../src/patterns/screens/Home";

export default function Home() {
  return (
    <React.Fragment>
      <Head title="Cartoleiro Eficaz"></Head>

      <ScreenHome />
    </React.Fragment>
  );
}
