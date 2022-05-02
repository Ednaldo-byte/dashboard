import { BiHelpCircle } from "react-icons/bi";

interface propsHelp{
  text: string
}

export default function Help({text}: propsHelp){
  return(
    <button type="button" className="border-0 bg-transparent mx-2" data-bs-toggle="tooltip" data-bs-placement="bottom" title={text}>
      <BiHelpCircle size={20}/>
    </button>
  )
}