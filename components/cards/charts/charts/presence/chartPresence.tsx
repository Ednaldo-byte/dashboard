import dynamic from "next/dynamic"
import { series, options } from "./data"

const ReactApexChart = dynamic(() => import('react-apexcharts'), {ssr: false})

export default function chartPresence() {
  return(
    <>
      <ReactApexChart series={series} options={options} type='bar' height={200} width={1200}/>
    </>
  )
}