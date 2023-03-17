import { useState } from 'react';
import './App.css';

function App() {
  const [currentBackground, setCurrentBackground] = useState('contour');
  const handleChange = (e) => setCurrentBackground(e.target.value);

  return (
    <>
      <div className={`bg bg-${currentBackground}`}>
        <div className="bg-picker">
          <h1 className="text-3xl"> Choose A Demo Background </h1>
          <select
            className="select border-sky-900 border-2 p-1 rounded-md w-full max-w-xs"
            onChange={handleChange}
          >
            <option selected value="contour">
              Contour
            </option>
            <option value="hexagon">Hexagon</option>
            <option value="sparkle">Sparkle</option>
            <option value="circle">Mass Circles</option>
            <option value="meteor">Meteor</option>
          </select>
          <div className="flex flex-col items-center">
            <h3 className="text-l mb-4">
              Check out more background and customizations:
            </h3>
            <a
              href="https://bgjar.com/"
              target="_blank"
              role="button"
              className="btn p-2 bg-sky-600 text-white rounded-lg w-36 text-center hover:bg-sky-700 transition-colors"
            >
              Visit BG Jar
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
