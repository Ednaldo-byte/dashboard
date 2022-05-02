import { ReactNode } from "react";
import { BiHelpCircle, BiMenu } from "react-icons/bi";
import Help from "./help";
import MenuDownloads from "./menuDownloads";

interface propsChartCard{
  title: string,
  children: ReactNode
}

export default function ChartCard({title, children}: propsChartCard){
  return(
    <div className="card bg-white w-100 h-100">

      <div className="container p-3 w-100  d-flex align-items-start">
        <div className="d-flex align-items-center">
          <MenuDownloads/>
          <Help text={title}/>
        </div>
        <div className="d-flex flex-column">
          <span className="fw-bold ms-2">
            {title} 
            <br/> 
            <span className="fw-light fs-7">Spot Price</span>
          </span>
        </div>
      </div>

      <div className="w-100 h-100">
        {children}
      </div>

    </div>
  )
}