import ChartCard from "../chartCard";
import ChartPresence from "../charts/presence/chartPresence";
import ChartPrice from "../charts/price/chartPrice";
import ChartTemperature from "../charts/temperature/chartTemperature";
export default function ChartArea(){
  if (typeof window !== "undefined") {
    console.log('opa')
  }
  return(
    <div className="w-100 p-0 d-grid gap-3">
      <ChartCard title={'Price'}>
        <ChartPrice/>
      </ChartCard>
      <ChartCard title={'Temperature'}>
        <ChartTemperature/>
      </ChartCard>
      <ChartCard title={'Presence'}>
        <ChartPresence/>
      </ChartCard>
    </div>
  )
}