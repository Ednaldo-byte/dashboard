import Link from "next/link";
import { useContext} from "react";
import { Dropdown} from "react-bootstrap";
import { BiSearchAlt, BiFullscreen, BiPowerOff, BiMenu } from "react-icons/bi";
import { AuthContext } from "../../context/auth";
import { toggleFullScreen } from "./fullScreen";

export default function Header(){

  const { setIsActive, isActive } = useContext(AuthContext)

  return(
    <header className="w-100 p-3 bg-body d-flex justify-content-between align-items-center header">

      <div className="container px-0 m-0 d-flex align-items-center">
        
        <button 
        className="border-0 bg-transparent m-3 menu" 
        type="button"
        onClick={() => {
          setIsActive(!isActive)
        }}>
          <BiMenu size={17}/>
        </button>
        
          <Dropdown style={{width: '25%', padding: '0px'}}>
            <Dropdown.Toggle variant='transparent' className="cursor-default dropdown-toggle-none no-shadow" 
            style={{'padding': '0', 'textAlign': "left"}}>

              <div className="bg-dark bg-opacity-10 rounded-pill p-2 d-flex align-items-center" 
                  style={{height: '50%', width: '15rem'}}>

              <span className="mx-2"><BiSearchAlt /></span>
              <input type="text" className="bg-transparent w-100 border-0 outline-none fs-7" placeholder="Search..."
            />
            </div>
            </Dropdown.Toggle>
            <Dropdown.Menu className="shadow">
              <Dropdown.Item>
                
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

      </div>

      <div className="w-25 d-flex align-items-center justify-content-end me-2">

        <button className="bg-transparent border-0 me-3" onClick={toggleFullScreen}>
          <BiFullscreen size={17}/>
        </button>

          <Dropdown>
            <Dropdown.Toggle variant='transparent' className='d-flex align-items-center no-shadow'>
            <div className="rounded-pill bg-primary p-2 me-2">
              <span className="text-white fw-bold">RM</span>
            </div>
              <span>Raphael</span>
            </Dropdown.Toggle>
            <Dropdown.Menu className='shadow' align={{lg: 'end'}}>
              <Link href={'/login'}>              
                <Dropdown.Item>
                  <BiPowerOff color="red" size='20'/> Logout
                </Dropdown.Item>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
      </div>
    </header>
  )
}