import { BiHelpCircle } from "react-icons/bi";

export default function HeaderMarketplace(){
  return(
    <div className="container w-100 h-10 d-flex flex-row justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <span className="fw-bold me-2">Offer</span>
          <BiHelpCircle/>
        </div>

        <div className="w-50 d-flex justify-content-evenly">
          <div className="d-flex flex-column">
            <span className="mb-2">Date</span>
            <input type="button" value='2022-01-06' className="btn btn-primary"/>
          </div>

          <div className="d-flex flex-column">
            <span className="mb-2">Price</span>
            <div className="dropdown">
              <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Price
              </button>
              <ul className="dropdown-menu border-0 shadow" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">Mode</a></li>
                <li><a className="dropdown-item" href="#">Minimum</a></li>
                <li><a className="dropdown-item" href="#">Maximum</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  )
}