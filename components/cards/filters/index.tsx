import { AllMarketplaces, Date, Payment, Period } from "./filters";

export default function CardFilter(){

  return(
    <div className="card h-100 bg-white d-flex flex-row p-3 d-grid gap-4">
      <Period/>
      <Date/>
      <Payment/>
      <AllMarketplaces/>
    </div>
  )
}