import React from "react";
import { Line } from "react-chartjs-2";
import api from "../../services/api";
import { useState, useEffect } from "react";

const GraficoLinha = () => {
  const [apiData, setApiData] = useState([]);

  const handleApiData = async () => {
    try {
      const response = await api.get("/transactions");
      setApiData(response.data);
    } catch (error) {
      alert(error);
    }
  };

  const day = apiData.map((item) => {
    return item.day;
  });

  const amount = apiData.map((item) => {
    return item.amount;
  });

  useEffect(() => {
    handleApiData();
  }, []);

  const data = {
    labels: day,
    datasets: [
      {
        label: "Quantidade de transações PIX",
        data: amount,
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
