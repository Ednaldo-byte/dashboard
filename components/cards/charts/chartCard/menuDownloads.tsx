import { Dropdown, DropdownButton } from "react-bootstrap";
import { BiMenu } from "react-icons/bi";

export default function MenuDownloads(){
  return(

    <Dropdown>
      <Dropdown.Toggle variant="transparent" className='dropdown-toggle-none no-shadow p-0 cursor-pointer'>
        <BiMenu size={21} color='#686666'/>
      </Dropdown.Toggle>

      <Dropdown.Menu className='shadow'>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    
  )
}