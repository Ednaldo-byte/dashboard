import { series, options } from "./data"
import ReactApexChart from "react-apexcharts";

export default function chartPresence() {
  return(
    <>
      <ReactApexChart series={series} options={options} type='bar' height={230} width={1000}/>
    </>
  )
}