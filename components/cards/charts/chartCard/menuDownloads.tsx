import { BiMenu } from "react-icons/bi";

export default function MenuDownloads(){
  return(
    <div className="dropdown">
      <button className="bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        <BiMenu size={25}/>
      </button>
      <ul className="dropdown-menu shadow" aria-labelledby="dropdownMenuButton1">
        <li><a className="dropdown-item" href="#">Download SVG</a></li>
        <li><a className="dropdown-item" href="#">Download PNG</a></li>
        <li><a className="dropdown-item" href="#">Download CSV</a></li>
      </ul>
    </div>
    
  )
}