import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { BiHomeCircle } from 'react-icons/bi';
import { AuthContext } from '../../context/auth';

export default function SideBar(){

  const { isActive } = useContext(AuthContext)

  return(
    <div className='bg-dark-blue d-flex flex-column position-fixed transition-1 sideBar'
    style={{width: isActive ? '13rem' : '4rem'}}>
      <span className='text-white mt-5 text-uppercase w-100 px-4'
      style={{'display': isActive ? 'block' : 'none'}}>
        Menu
      </span>
      <div className="container px-3 mt-4 d-flex justify-content-start align-items-center">
        <span>
          <BiHomeCircle color='white' size={25}/>
        </span>
        <span className='text-white ms-2'
        style={{'display': isActive ? 'block' : 'none'}}>
          Dashboard
        </span>
      </div>
    </div>
  )
}