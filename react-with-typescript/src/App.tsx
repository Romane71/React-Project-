import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";

interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Alina Stefanica",
      url: "https://www.pinkvilla.com/english/images/2023/01/1674581250_pexels-jhosua-rodriguez-2465327.jpg",
      age: 29,
      note: "Allergic to seafood",
    },
  ]);

  return (
    <div className="App">
      <h1>People Invited To My Party</h1>
      <List people={people} />
    </div>
  );
}
export default App;
