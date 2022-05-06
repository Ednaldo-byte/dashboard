import { BiLinkExternal, BiUnlink } from "react-icons/bi";

const teste = [
  {
    id: 1,
    marketplace:'americanas',
    presence: 80,
    sp: 3.513,
    rrp: 41,
    ip: '',
    rrp2: 0,
    view: true
  },
  {
    id: 2,
    marketplace:'carrefour',
    presence: 40,
    sp: 3.513,
    rrp: 36,
    ip: '',
    rrp2: 28,
    view: true
  },
  {
    id: 3,
    marketplace:'casas bahia',
    presence: 0,
    sp: 3.513,
    rrp: 0,
    ip: '',
    rrp2: 0,
    view: false
  },
  {
    id: 4,
    marketplace:'extra',
    presence: 0,
    sp: 3.513,
    rrp: 0,
    ip: '',
    rrp2: 0,
    view: false
  },
  {
    id: 5,
    marketplace:'fast shop',
    presence: 50,
    sp: 3.513,
    rrp: 33,
    ip: '',
    rrp2: 29,
    view: true
  },
  {
    id: 6,
    marketplace:'fujioka',
    presence: 0,
    sp: 3.513,
    rrp: 0,
    ip: '',
    rrp2: 0,
    view: false
  },
  {
    id: 7,
    marketplace:'havan',
    presence: 40,
    sp: 3.513,
    rrp: 0,
    ip: '',
    rrp2: 0,
    view: true
  },
  {
    id: 8,
    marketplace:'magazine luiza',
    presence: 60,
    sp: 3.513,
    rrp: 41,
    ip: '',
    rrp2: 37,
    view: true
  },
  {
    id: 9,
    marketplace:'mercado livre',
    presence: 70,
    sp: 3.513,
    rrp: 23,
    ip: '',
    rrp2: 0,
    view: true
  },
  {
    id: 10,
    marketplace:'motorola',
    presence: 0,
    sp: 3.513,
    rrp: 0,
    ip: '',
    rrp2: 0,
    view: true
  },
  {
    id: 11,
    marketplace:'nagem',
    presence: 0,
    sp: 3.513,
    rrp: 0,
    ip: '',
    rrp2: 0,
    view: false
  },
  {
    id: 12,
    marketplace:'pernambucanas',
    presence: 30,
    sp: 3.513,
    rrp: 40,
    ip: '',
    rrp2: 40,
    view: true
  },
  {
    id: 13,
    marketplace:'ponto',
    presence: 50,
    sp: 3.513,
    rrp: 39,
    ip: '',
    rrp2: 32,
    view: true
  },
  {
    id: 14,
    marketplace:'samsung',
    presence: 50,
    sp: 3.513,
    rrp: 33,
    ip: '',
    rrp2: 33,
    view: true
  },
  {
    id: 15,
    marketplace:'shoptime',
    presence: 30,
    sp: 3.513,
    rrp: 39,
    ip: '',
    rrp2: 0,
    view: true
  },
  {
    id: 16,
    marketplace:'submarino',
    presence: 40,
    sp: 3.513,
    rrp: 40,
    ip: '',
    rrp2: 0,
    view: true
  }
]

export default function TableMarketplace(){

  return(
    <div className="h-100 mt-2 tableContainer overflow-scroll">
      <table className="table text-center">
        <tbody>
          <tr className="fs-7" id="thead">
            <th scope="col">Marketplace</th>
            <th scope="col">Presence</th>
            <th scope="col">SP (R$)</th>
            <th scope="col">%RRP</th>
            <th scope="col">IP (R$)</th>
            <th scope="col">%RRP</th>
            <th scope="col">View</th>
          </tr>

          {
            teste.map((item) => {
              return(
                <tr key={item.id.toString()} className='fs-7'>
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