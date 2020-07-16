import React from 'react';
import Form from "./Form";
import Header from "./Header";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import './App.css';

const tasks = [
  {
    id: 1,
    content: "przejść na reacta",
    done: false,
  },
  {
    id: 2,
    content: "umyć zęby",
    done: true,
  },
];

const hiding = false;

function App() {
  return (
    <div>
      <Header />
      <main>
        <Section title="Dodaj nowe zadanie" body={<Form />} />
        <Section body={<Tasks tasks={tasks} hiding={hiding}/>} extraButtons={<Buttons tasks={tasks} hiding={hiding}/>} />
      </main>
    </div>
  );
}

export default App;
