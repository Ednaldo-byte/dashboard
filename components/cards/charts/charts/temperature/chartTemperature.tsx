import dynamic from "next/dynamic";
import { options, series } from "./data";

const ReactApexChart = dynamic(() => import('react-apexcharts'), {ssr: false})

export default function ChartTemperature(){
  return (
    <>
      <ReactApexChart options={options} series={series} type='heatmap' height={200} width={1200}/>
    </>
  )
}