import React from "react";
import { Bar } from "react-chartjs-2";
import api from "../../services/api";
import { useState } from "react";

const GraficoBarras = () => {
  const [apiData, setApiData] = useState([]);
  const getApiData = async () => {
    try {
      const response = await api.get("/messages");
      setApiData(response.data);
    } catch (error) {
      alert(error);
    }
  };

  const data = {
    labels: ["Red", "Blue", "Yellow", "Purple"],
    datasets: [
      {
        label: "Quantidade de contas abertas",
        data: [12, 19, 3, 5],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };
  return <Bar data={data} options={options} className="graficoBarras" />;
};

export default GraficoBarras;
