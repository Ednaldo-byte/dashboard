import { useRef, useState } from "react";
import { Overlay, Tooltip } from "react-bootstrap";
import { BiHelpCircle } from "react-icons/bi";

interface propsHelp{
  text: string
}

export default function Help({text}: propsHelp){

  const [show, setShow] = useState(false);
  const target = useRef(null);
  
  return(
    <>
    <button 
    type="button" 
    className="border-0 bg-transparent mx-2 cursor-pointer" 
    data-bs-toggle="tooltip" 
    data-bs-placement="top" 
    title={text} 
    ref={target} 
    onClick={() => setShow(!show)}>
      <BiHelpCircle size={20} color='#686666'/>
    </button>

    <Overlay target={target.current} show={show} placement="right">
      {(props) => (
        <Tooltip id="tooltip" {...props}>
          {text}
        </Tooltip>
      )}
    </Overlay>
    
    </>
  )
}