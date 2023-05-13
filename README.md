# React Word Count App
This is a React application that fetches data from a remote text file, performs word frequency analysis, and displays the top 20 most frequent words in a histogram. The user can also export the word count data as a CSV file.

## URL
<code> https://word-count-application.netlify.app/ </code>

## Components
### App
The main component that serves as the entry point of the application. It handles the state for word counts, loading status, and user input. It also contains the logic to fetch the data, perform word frequency analysis, and export the data.

### Loading
A loading spinner component that is displayed while the data is being fetched.

### Libraries and Plugins Used
The following libraries and plugins are used in this application:

* React: A JavaScript library for building user interfaces.
* axios: A promise-based HTTP client used for making API requests.
* AppexChart: A component that utilizes the `react-apexcharts` library to display graphs and charts in a React application.
* react-router-dom: A React library used for implementing routing and navigation functionality in a single-page application.

## Usage
To use the application, follow these steps:

1. Clone the repository or download the source code.
2. Install the required dependencies by running npm install in the project directory.
3. Start the development server by running npm start.
4. Access the application in your browser at <code> http://localhost:3000 </code>
5. Click the "Load histogram" button to fetch the data and display the word count histogram.
6. Hover over the bars in the histogram to view the word and count information.
7. Click the "Export this data" button to download the word count data as a CSV file.
8. Feel free to customize the application according to your needs by modifying the code and styles.

## Conclusion
This React Word Count App provides a simple interface to analyze word frequency in a text file and visualize the results. It demonstrates the usage of React hooks, asynchronous data fetching, and dynamic rendering of components based on the application state.

For any questions or issues, please refer to the documentation or contact the project maintainers.

Enjoy using the React Word Count App!
