import React, { useState } from 'react'
import axios from 'axios'
import AppexChart from './components/displayMain/AppexChart';
import { Route, Routes } from "react-router-dom";
import './App.css'

const App = () => {

  const [displayData, setDisplayData] = useState([]);

  async function fetchData() {
    try {
      const response = await axios(
        "https://www.terriblytinytales.com/test.txt"
      );
      const data = response.data;
      const words = data.toLowerCase().split(/\s+/);
      const frequency = {};

      for (let word of words) {
        if (
          word !== "" &&
          isNaN(word) &&
          !word.includes("-") &&
          !word.includes("//") &&
          !word.includes("@") &&
          !word.includes("(") &&
          !word.includes(")") &&
          !word.includes("?")
        ) {
          frequency[word] = frequency[word] ? frequency[word] + 1 : 1;
        }
      }
      // Sort the word frequencies from smallest to largest
      const sortedFrequency = Object.entries(frequency).sort(
        (a, b) => b[1] - a[1]
      );

      // Get the top 20 words with highest occurrence
      const topWords = sortedFrequency.slice(0, 20);
      setDisplayData(topWords)
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <>
      <div class="area" >
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >


      <div className='App'>

        <h1>Top 20 most Frequent words</h1>
        {
          displayData.length === 0 ?
            <button onClick={fetchData} className='btn-submit'>Load Graph</button>
            : <span></span>
        }

        <Routes>
          <Route
            exact
            path="/"
            element={<AppexChart data={displayData} />} />

        </Routes>

      </div>
    </>
  )
}

export default App