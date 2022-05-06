import ReactApexChart from "react-apexcharts";
import { options, series } from "./data";

export default function ChartTemperature(){
  return (
    <>
      <ReactApexChart options={options} series={series} type='heatmap' height={230} width={1000}/>
    </>
  )
}