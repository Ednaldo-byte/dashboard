import ReactApexChart from "react-apexcharts"
import { series, options } from './data'

export default function ChartPrice(){

  return(
    <>
      <ReactApexChart options={options} series={series} type='line' width={1000} height={230}/>
    </>
  )
}