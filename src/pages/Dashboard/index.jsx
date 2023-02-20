import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { faker } from "@faker-js/faker";
import Card from "../../components/Card";
import Doghnut from "./components/Doghnut";
const Dashboard = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "Income",
        data: [2000000, 2500000, 3100000, 1100000, 1800000, 1000000],
        borderColor: "#fb923c",
        backgroundColor: "#fb923c",
      },
      {
        label: "Expense ",
        data: [1000000, 2300000, 1300000, 1800000, 1100000, 3100000],
        borderColor: "#4ade80",
        backgroundColor: "#4ade80",
      },
    ],
  };
  //   [12000, 13000, 14000, 1500, 5000, 3000, 2000, 1000, 200, 300, 400, 100, 200];

  console.log(labels.map(() => faker.datatype.number({ min: 0, max: 1000 })));
  return (
    <div>
      <h1 className="text-black text-3xl">Dashboard</h1>
      <div className="grid grid-cols-4 gap-10  font-semibold mb-5">
        <div className=" bg-orange-400 px-5 py-6 mt-5 justify-around text-white flex items-center">
          <i className="bi bi-coin  text-2xl"></i>
          <div className="text-center text-sm">
            <p>Total Income</p>
            <p className="mt-1">Rp.200,000</p>
          </div>
        </div>
        <div className=" bg-green-400 px-5 py-6 mt-5 justify-around text-white flex items-center">
          <i className="bi bi-basket text-2xl"></i>
          <div className="text-center text-sm">
            <p>Total Expense</p>
            <p className="mt-1">Rp.230,000</p>
          </div>
        </div>
        <div className=" bg-red-300 px-5 py-6 mt-5 justify-around text-white flex items-center">
          <i className="bi bi-coin  text-2xl"></i>
          <div className="text-center text-sm">
            <p>Total Income</p>
            <p className="mt-1">Rp.200,000</p>
          </div>
        </div>
        <div className=" bg-sky-400 px-5 py-6 mt-5 justify-around text-white flex items-center">
          <i className="bi bi-coin  text-2xl"></i>
          <div className="text-center text-sm">
            <p>Total Income</p>
            <p className="mt-1">Rp.200,000</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10">
        <div className=" mt-5">
          <div className="  ">
            <Card className=" mt-5 flex justify-center flex-col items-center">
              <span className="text-center">
                Persentase Kategori Expense 2023
              </span>
              <Doghnut labels={["Jajan", "Kebuthan", "Sedekah"]} />
            </Card>
            <Card className=" mt-5 flex justify-center flex-col items-center">
              <span className="text-center">
                Persentase Kategori Income 2023
              </span>

              <Doghnut labels={["Gaji", "Kebuthan", "Sedekah"]} />
            </Card>
          </div>
        </div>
        <Card className="text-center col-span-2 mt-10  h-max  border">
          <span className="">Persentase Income & Expense 2023</span>
          <Line options={options} data={data} className="" />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
