import './App.css';
import Persons from './Components/Persons';
import { useState } from 'react';

function App() {
  const[persons, setPersons]= useState( [
    {
        id:1,
        name: "Adrián Nieto",
        role: "FullStack Developer",
        img: "https://bootdey.com/img/Content/avatar/avatar1.png",
    },
    {
        id:2,
        name: "Alejandro Peña",
        role: "Software Engineer",
        img: "https://bootdey.com/img/Content/avatar/avatar2.png",
    },
    {
        id:3,
        name: "Lucho Días",
        role: "Frontend Developer",
        img: "https://bootdey.com/img/Content/avatar/avatar3.png",
    },
]);
  return (
    <div className='App'>
      <div className='container'>
        <Persons persons={persons} setPersons={setPersons}/>
      </div>
    </div>
  );
}

export default App;