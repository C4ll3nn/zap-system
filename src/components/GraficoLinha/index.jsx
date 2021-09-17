import React from "react";
import { Line } from "react-chartjs-2";
import api from "../../services/api";
import { useState } from "react";

const GraficoLinha = () => {
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
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "Quantidade de transações PIX",
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };
  return <Line data={data} options={options} className="graficoLinha" />;
};

export default GraficoLinha;
