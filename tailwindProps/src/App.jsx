import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-zinc-300 text-black rounded-lg p-3">Tailwind</h1>
      < Card brand='hp' />
      < Card brand='Asus' />
      < Card />
    </>
  );
}

export default App;
