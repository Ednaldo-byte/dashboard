import { Dropdown } from "react-bootstrap";
import { BiHelpCircle } from "react-icons/bi";
import Help from "../../help";

export default function HeaderMarketplace(){
  return(
    <div className="w-100 m-0 d-flex flex-row align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <span className="fw-bold me-2 fs-5">Offer</span>
          <Help text="Offer"/>
        </div>

        <div className=" d-flex justify-content-end">
          <div className="d-flex flex-column me-3">
            <span className="mb-2 legend">Date</span>
            <input type="date" defaultValue='2022-01-06' className="btn btn-primary"/>
          </div>

          <div className="d-flex flex-column justify-content-end">

            <span className="mb-2 legend">Price</span>

            <Dropdown>
              <Dropdown.Toggle>
                Price
              </Dropdown.Toggle>
              <Dropdown.Menu className="shadow">
              <Dropdown.Item>Mode</Dropdown.Item>
                <Dropdown.Item>Minimum</Dropdown.Item>
                <Dropdown.Item>Maximum</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            
          </div>
        </div>
      </div>
  )
}