import 'bootstrap/dist/css/bootstrap.min.css';
import { BiHomeCircle } from 'react-icons/bi';

export default function SideBar(){
  return(
    <div className='w-5 h-100 pt-5 bg-dark-blue d-flex justify-content-center position-fixed'>
      <BiHomeCircle color='white' size={25}/>
    </div>
  )
}