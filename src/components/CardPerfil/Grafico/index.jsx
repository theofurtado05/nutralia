import React, { Component } from "react";
import Chart from "react-apexcharts";
import { usePerfil } from "../../../context/Perfil.context";
import { useEffect } from "react";
import { useState } from "react";

const Grafico = ({categoria, titulo1, lista1, titulo2, lista2, titulo3, lista3}) => {

    let state = {
      options: {
        stroke: {
          curve: 'smooth',
        },
        chart: {
          id: "basic-bar",
          zoom: {
            enabled: false,
            
          },
        },
        xaxis: {
          categories: categoria ? categoria : [1,2,3]
        }
      },
      series: [
        {
          name: titulo1,
          data: lista1 ? lista1 : [1,2,3],
          type: "line"
        },
        {
          name: titulo2,
          data: lista2 ? lista2 : [1,2,3],
          type: "line"
        },
        {
          name: titulo3,
          data: lista3 ? lista3 : [1,2,3],
          type: 'column'
        }
      ],
    };
  

  
    return (
        <div className="app">
        <div className="row">
              <div className="mixed-chart">
                  <Chart
                      options={state.options}
                      series={state.series}
                      width="500"
                  />
              </div>
        </div>
        </div>
    );
  

}
export default Grafico;