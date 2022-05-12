import { BiLinkExternal, BiUnlink } from "react-icons/bi";
import { data } from "./data";

export default function TableMarketplace(){

  return(
    <div className="mt-2 tableContainer overflow-scroll">
      <table className="table">
        <tbody>
          <tr className="fs-7 text-center" id="thead">
            <th scope="col">Marketplace</th>
            <th scope="col"><span>Presence</span></th>
            <th scope="col">SP (R$)</th>
            <th scope="col">%RRP</th>
            <th scope="col">IP (R$)</th>
            <th scope="col">%RRP</th>
            <th scope="col">View</th>
          </tr>
          {
            data.map((item) => {
              return(
                <tr key={item.id.toString()} className='fs-7 text-center'>
                  <td className="text-uppercase text-start">{item.marketplace}</td>
                  <td>{item.presence}</td>
                  <td>{item.sp}</td>
                  <td>
                    <span style={{backgroundColor: `rgba(255, 0, 0, ${item.rrp}%)`}}
                    className='px-3 py-1 rounded w-100'>
                      {item.rrp}%
                    </span>
                  </td>
                  <td>{!item.ip ? '-' : item.ip}</td>
                  <td>
                    <span style={{backgroundColor: `rgba(255, 0, 0, ${item.rrp2}%)`}}
                    className='px-3 py-1 rounded w-100'>
                      {item.rrp2}%
                    </span>
                  </td>
                  <td>{item.view ? <BiLinkExternal/> : <BiUnlink/>}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}