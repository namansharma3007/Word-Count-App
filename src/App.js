import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Loading from './components/loading/Loading';

function App() {
  const [wordCounts, setWordCounts] = useState([]);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [text, setText] = useState("")

  async function fetchData() {
    setLoadingSubmit(true)
    try {
      const response = await axios(
        "https://www.terriblytinytales.com/test.txt"
      );
      const data = response.data;
      setText(text)
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
          !word.includes("?") &&
          word.length >= 2
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
      setTimeout(() => {
        setWordCounts(topWords);
      }, 1500)
    } catch (err) {
      console.error(err);
    }
  }

  const exportData = () => {
    const csvContent = 'data:text/csv;charset=utf-8,' + wordCounts.map(([word, count]) => `${word},${count}`).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'word_counts.csv');
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className='App'>
      {loadingSubmit && wordCounts.length === 0 && <Loading />} {/* Render the Loading component while loadingSubmit is true */}

      {!loadingSubmit && wordCounts.length === 0 && (
        <div className='btn-loading-text'>
          <h1>Top 20 most Frequent words</h1>
          <button onClick={fetchData} className='btn-submit'>
            Load histogram
          </button>
        </div>
      )}




      {wordCounts.length > 0 && (

        <div className='histogram-display'>
          <h1>Top 20 most Frequent words</h1>
          <div className="histogram">
            {wordCounts.map(([word, count], index) => (
              <div
                key={word}
                style={{
                  height: count * 22
                }}
                title-name={word}
                data-testid={`${index}`}
                value={count}
                className='bar'
              >
                <span className='bar-line'></span>
              </div>
            ))}

          </div>

          <button onClick={exportData} className='btn-export'>
            Export this data
          </button>
        </div>
      )}


    </div>
  );
}

export default App;
