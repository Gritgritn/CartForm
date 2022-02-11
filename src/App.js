import React, { useState } from 'react';
import './App.css';
import YandexMap from './Map';

const ApiKey = "https://api-maps.yandex.ru/2.1/?apikey=5f715ff6-cd1b-4bf2-a920-016e18c54f42&lang=ru_RU";
const coord = [44.753761, 33.775442];
const aDress = "Долинное, ул. Фонтанная 5";

function App() {
  const [ adress, setBaba ] = useState(aDress);


  return (
    <div className="App">
      <YandexMap coord={coord} adress={adress}/>
      <button onClick={() => setBaba("Симферополь, балаклавская")}>Поменять</button>
      <p>{adress}</p>
    </div>
  );
}

export default App;
