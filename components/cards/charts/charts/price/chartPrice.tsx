import dynamic from 'next/dynamic'
import { series, options } from './data'

const ReactApexChart = dynamic(() => import('react-apexcharts'), {ssr: false})

export default function ChartPrice(){

  return(
    <>
      <ReactApexChart options={options} series={series} type='line' width={1200} height={200}/>
    </>
  )
}