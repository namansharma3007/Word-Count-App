import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import './AppexCharts.css'

const ApexChart = ({ data }) => {
  const [displayDataSet, setdisplayDataSet] = useState([]);

  useEffect(() => {
    setdisplayDataSet(data);
  }, [data]);

  const yAxis = [];
  for (let i = 0; i < displayDataSet.length; i++) {
    yAxis.push(displayDataSet[i][1]);
  }

  const xAxis = [];
  for (let i = 0; i < displayDataSet.length; i++) {
    xAxis.push(displayDataSet[i][0]);
  }
  const seriesData = [
    {
      name: "Frequency",
      data: yAxis,
    },
  ];

  const options = {
    chart: {
      height: 450,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: "50%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
    },
    grid: {
      row: {
        colors: ["#fff", "#f2f2f2"],
      },
    },
    xaxis: {
      labels: {
        rotate: -45,
      },
      categories: xAxis,
      tickPlacement: "on",
      title: {
        text: "Words",
      },
    },
    yaxis: {
      title: {
        text: "Frequency",
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [50, 0, 100],
      },
    },
  };

  const exportData = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      displayDataSet.map(([word, count]) => `${word},${count}`).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "word_counts.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div id="chart">
      {displayDataSet.length > 0 ? (
        <div className="graph">
          <ReactApexChart
            options={options}
            series={seriesData}
            type="bar"
            height={450}
            width={1050}
          />
          <button onClick={exportData} className="export-button">Export Data</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ApexChart;
