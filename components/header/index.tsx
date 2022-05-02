import { BiSearchAlt, BiFullscreen, BiPowerOff, BiMenu } from "react-icons/bi";

export default function Header(){
  return(
    <header className="w-100 h-100 bg-body py-3 d-flex justify-content-between align-items-center">

      <div className="container px-0 m-0 d-flex">
        <button className="border-0 bg-transparent m-3"><BiMenu size={25}/></button>
        
        <div className="input-group w-25 bg-dark bg-opacity-10 rounded-pill p-2">
          <span className="m-2"><BiSearchAlt /></span>
          <div className="dropdown">
            <button className="bg-transparent w-25 h-100 border-0 text-start py-2" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <input type="text" className="bg-transparent border-0 w-100 h-100 outline-none" placeholder="Search" id="dropdownMenuButton1"/>
            </button>
            <ul className="dropdown-menu shadow" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-25 d-flex align-items-center justify-content-evenly">

        <button className="bg-transparent border-0">
          <BiFullscreen size={25}/>
        </button>

        <div className="d-flex align-items-center">
          <div className="rounded-pill bg-primary p-2">
            <span className="text-white fw-bold">RM</span>
          </div>
          <div className="dropdown">
            <button className="bg-transparent border-0 ms-2 dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
              Raphael
            </button>
            <ul className="dropdown-menu border-0 shadow" aria-labelledby="dropdownMenuButton2">
              <li>
                <a className="dropdown-item" href="#">
                  <BiPowerOff size={20} color="#dc3545"/> Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}