import { AllMarketplaces, Date, Payment, Period } from "./filters";

export default function CardFilter(){

  return(
    <div className="bg-white radius h-100 bg-white d-flex flex-row  flex-wrap p-3 d-grid gap-3">
      <Period/>
      <Date/>
      <Payment/>
      <AllMarketplaces/>
    </div>
  )
}