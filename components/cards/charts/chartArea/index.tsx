import ChartCard from "../chartCard";

export default function ChartArea(){
  return(
    <div className="h-100 p-0 d-grid gap-3">
      <ChartCard title={'Price'}>
        
      </ChartCard>
      <ChartCard title={'Temperature'}>

      </ChartCard>
      <ChartCard title={'Presence'}>

      </ChartCard>
    </div>
  )
}