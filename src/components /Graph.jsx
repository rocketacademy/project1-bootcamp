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
const Graph = (props) => {
  // const medicineData = props.medicineData;
  const moodData = props.moodData;

  moodData.sort(
    (a, b) =>
      moment(`${a.moodDate} ${a.moodTime}`).toDate().getTime() -
      moment(`${b.moodDate} ${b.moodTime}`).toDate().getTime(),
  );

  const moodEvent = moodData.map((data) => data.id);
  const moodTime = moodData.map((data) =>
    moment(`${data.moodDate} ${data.moodTime}`).format("YYYY-MM-DD HH:mm"),
  );

  // console.log(moodTime);

  // medicineData.sort(
  //   (a, b) =>
  //     moment(`${a.medicineDate} ${a.medicineTime}`).toDate().getTime() -
  //     moment(`${b.medicineDate} ${b.medicineTime}`).toDate().getTime(),
  // );

  // const medicineEvent = medicineData.map((data) => data.medicineQtyOne);
  // const medicineTime = medicineData.map((data) =>
  //   moment(`${data.medicineDate} ${data.medicineTime}`).format(
  //     "YYYY-MM-DD HH:mm",
  //   ),
  // );

  // console.log(medicineTime);

  // const tempMedTime = medicineData.map((data) =>
  //   moment(`${data.medicineDate} ${data.medicineTime}`).toDate(),
  // );

  // const tempMoodTime = moodData.map((data) =>
  //   moment(`${data.moodDate} ${data.moodTime}`).toDate(),
  // );

  // const combined = tempMoodTime.concat(tempMedTime);

  // combined.sort((a, b) => a.getTime() - b.getTime());

  // console.log(combined);

  const dataGraph = {
    labels: moodTime,
    title: {
      text: "Date Time",
    },
    datasets: [
      {
        type: "line",
        label: "Mood Tracker",
        data: moodEvent,
        tension: 0,
        borderColor: "#f59e0b",
        backgroundColor: "#f59e0b",
        radius: 2,
        borderWidth: 2,
        pointHitRadius: 5,
      },
      // {
      //   type: "bar",
      //   label: "Med Intake",
      //   data: medicineEvent,
      //   barThickness: 4,
      //   borderColor: "rgb(75, 192, 192)",
      //   borderWidth: 2,
      //   backgroundColor: "rgb(75, 192, 192)",
      // },
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

export default Graph;
