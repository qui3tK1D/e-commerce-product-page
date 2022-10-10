import React from "react";
import NavBar from "./components/NavBar/NavBar";
import SneakerInfo from "./components/SneakerInfo/SneakerInfo";

const App = () => {
  return (
    <>
      <div className="md:px-6 px-0 fixed z-10 bg-white w-full top-0">
        <NavBar />
      </div>
      <main>
        <section className="md:px-6 lg:px-16">
          <SneakerInfo />
        </section>
      </main>
    </>
  );
};

export default App;
