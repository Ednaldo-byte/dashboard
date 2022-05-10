import ChartCard from "../chartCard";
import ChartPresence from "../charts/presence/chartPresence";
import ChartPrice from "../charts/price/chartPrice";
import ChartTemperature from "../charts/temperature/chartTemperature";
export default function ChartArea(){
  return(
    <div className="w-100 p-0 d-grid gap-3">
      <ChartCard title={'Price'}>
        {
          (typeof window !== undefined) &&
          <ChartPrice/>
        }
      </ChartCard>
      <ChartCard title={'Temperature'}>
        {
          (typeof window !== undefined) &&
          <ChartTemperature/>
        }
      </ChartCard>
      <ChartCard title={'Presence'}>
        {
          (typeof window !== undefined) &&
          <ChartPresence/>
        }
      </ChartCard>
    </div>
  )
}