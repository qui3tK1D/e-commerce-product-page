import React from "react";
import NavBar from "./components/NavBar/NavBar";
import SneakerInfo from "./components/SneakerInfo/SneakerInfo";

const App = () => {
  return (
    <>
      <header className="md:px-6 px-0 fixed z-10 bg-white w-full top-0">
        <NavBar />
      </header>
      <main>
        <section className="md:px-6 lg:px-16">
          <SneakerInfo />
        </section>
      </main>
      <footer>
        <div className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            {" "}
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/qui3tK1D">Qui3tK1D</a>.
        </div>
      </footer>
    </>
  );
};

export default App;
