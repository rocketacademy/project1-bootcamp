import React, { useState, useEffect } from "react";
import moment from "moment";
import { Chart } from "react-chartjs-2";
import "chartjs-adapter-moment";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  TimeScale,
} from "chart.js";

import uuid from "react-uuid";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  TimeScale,
);

const DummyGraph = () => {
  const dataGraph = {
    labels: [],
    title: {
      text: "Date Time",
    },
    datasets: [
      {
        type: "line",
        label: "Mood Tracker",
        data: [],
        tension: 0,
        borderColor: "#f59e0b",
        backgroundColor: "#f59e0b",
        radius: 2,
        borderWidth: 2,
        pointHitRadius: 5,
      },
    ],
  };
  const options = {
    animation: true,
    spanGaps: true,
    responsive: true,
    scales: {
      y: {
        title: {
          display: true,
          text: "Mood Levels",
        },
      },
      x: {
        min: "2022-09-30 00:00:00",
        max: "2022-10-30 00:00:00",
        type: "time",
        time: {
          displayFormats: {
            second: "MMM DD",
            minute: "MMM DD",
            hour: "MMM DD",
            day: "MMM DD",
            week: "MMM DD",
            month: "MMM DD",
            quarter: "MMM DD",
            year: "MMM DD",
          },
        },
        title: {
          display: true,
          text: "Date-Time",
        },
      },
    },
  };
  return (
    <div>
      <Chart
        type="line"
        data={dataGraph}
        options={options}
        className="h-max w-11/12 text-dark-pink text-xs p-3"
      />
    </div>
  );
};

export default DummyGraph;
