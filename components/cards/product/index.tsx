import { BiHelpCircle, BiStar } from "react-icons/bi";


export default function CardProduct(){
  return(
    <div className="bg-white w-100 radius product overflow-hidden">

      <div className="h-50 p-3 bg-primary">
        <span className="fs-4 fw-bold text-light">S21 (128BG)</span>
        <br />
        <span className="fs-5 fw-bold text-light">SAMSUNG</span>
        <br />
        <div className="mt-4">
          <span className="fs-6 text-light">RRP: R$ 5.999</span>
          <div className="bg-dark mt-2" style={{width: '5rem', height: '6rem'}}></div>
        </div>

      </div>

      <div className="w-100 h-50 p-3 d-flex flex-column justify-content-between align-items-end">
        <div className="d-flex align-items-center justify-content-between">
          <span className="me-2">Ranking: </span>
          <BiStar color="#FDCA03"/> 
          <BiStar color="#FDCA03"/> 
          <BiStar color="#FDCA03"/> 
          <BiStar color="#FDCA03"/> 
          <BiStar color="#2246FA"/>
          <span className="ms-2">
            <BiHelpCircle size={20}/>
          </span>
        </div>
        <span>Last scraping: 2022-01-06</span>
      </div>
    </div>
  )
}