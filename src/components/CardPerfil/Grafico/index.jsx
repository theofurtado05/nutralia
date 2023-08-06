import React, { Component } from "react";
import Chart from "react-apexcharts";

const Grafico = ({periodo}) => {
    //periodo = 7 dias => ultimos 7 dias contando hoje
    //periodo = 30 dias => ultimos 30 dias contando hoje
    const state = {
      options: {
        chart: {
          id: "basic-bar",
          
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
        {
          name: "Peso (kg)",
          data: [30, 40, 45, 50, 49, 90, 132]
        },
        {
          name: "Altura (cm)",
          data: [33, 44, 94, 53, 42]
        },
        {
            name: "IMC",
            data: [33, 44, 94, 53, 42]
        }
      ]
    };
  

  
    return (
        <div className="app">
        <div className="row">
            <div className="mixed-chart">
            <Chart
                options={state.options}
                series={state.series}
                type="line"
                width="500"
            />
            </div>
        </div>
        </div>
    );
  

}
export default Grafico;