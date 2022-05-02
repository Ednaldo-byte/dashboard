import { BiLinkExternal } from "react-icons/bi";

const teste = [
  {
    marketplace:'americanas',
    presence: 80,
    sp: 3.513,
    rrp: 41,
    ip: '',
    rrp2: 0,
    view: true
  },
  {
    marketplace:'americanas',
    presence: 80,
    sp: 3.513,
    rrp: 41,
    ip: '',
    rrp2: 0,
    view: false
  },
  {
    marketplace:'americanas',
    presence: 80,
    sp: 3.513,
    rrp: 41,
    ip: '',
    rrp2: 0,
    view: false
  },
  {
    marketplace:'americanas',
    presence: 80,
    sp: 3.513,
    rrp: 41,
    ip: '',
    rrp2: 0,
    view: false
  },
  {
    marketplace:'americanas',
    presence: 80,
    sp: 3.513,
    rrp: 41,
    ip: '',
    rrp2: 0,
    view: false
  },
  {
    marketplace:'americanas',
    presence: 80,
    sp: 3.513,
    rrp: 41,
    ip: '',
    rrp2: 0,
    view: false
  },
  {
    marketplace:'americanas',
    presence: 80,
    sp: 3.513,
    rrp: 41,
    ip: '',
    rrp2: 0,
    view: true
  },
  {
    marketplace:'americanas',
    presence: 80,
    sp: 3.513,
    rrp: 41,
    ip: '',
    rrp2: 0,
    view: false
  },
  {
    marketplace:'americanas',
    presence: 80,
    sp: 3.513,
    rrp: 20,
    ip: '',
    rrp2: 0,
    view: false
  },
  {
    marketplace:'americanas',
    presence: 80,
    sp: 3.513,
    rrp: 41,
    ip: '',
    rrp2: 0,
    view: true
  },
  {
    marketplace:'americanas',
    presence: 80,
    sp: 3.513,
    rrp: 41,
    ip: '',
    rrp2: 0,
    view: false
  },
  {
    marketplace:'americanas',
    presence: 80,
    sp: 3.513,
    rrp: 41,
    ip: '',
    rrp2: 0,
    view: false
  },
  {
    marketplace:'americanas',
    presence: 80,
    sp: 3.513,
    rrp: 41,
    ip: '',
    rrp2: 0,
    view: false
  },
  {
    marketplace:'americanas',
    presence: 80,
    sp: 3.513,
    rrp: 41,
    ip: '',
    rrp2: 0,
    view: false
  },
  {
    marketplace:'americanas',
    presence: 80,
    sp: 3.513,
    rrp: 41,
    ip: '',
    rrp2: 0,
    view: false
  },
  {
    marketplace:'americanas',
    presence: 80,
    sp: 3.513,
    rrp: 41,
    ip: '',
    rrp2: 0,
    view: false
  }
]

export default function TableMarketplace(){

  return(
    <div className="container mt-2 overflow-scroll">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Marketplace</th>
            <th scope="col">Presence</th>
            <th scope="col">SP (R$)</th>
            <th scope="col">%RRP</th>
            <th scope="col">IP (R$)</th>
            <th scope="col">%RRP</th>
            <th scope="col">View</th>
          </tr>
        </thead>
        <tbody>

          {
            teste.map((item) => {
              let opacity = item.rrp
              return(
                <tr>
                  <td>{item.marketplace}</td>
                  <td>{item.presence}</td>
                  <td>{item.sp}</td>
                  <td>{item.rrp}%</td>
                  <td>{!item.ip ? '-' : item.ip}</td>
                  <td>{item.rrp2}</td>
                  <td>{item.view ? <BiLinkExternal/> : '-'}</td>
                </tr>
              )
            })
          }
          {/*
          <tr>
            <td>AMERICANAS</td>
            <td>80%</td>
            <td>3.513</td>
            <td>
              <span className="bg-danger p-2 rounded">
                41%
              </span>
            </td>
            <td>-</td>
            <td>0%</td>
            <td><BiLinkExternal/></td>
          </tr>
           */}
        </tbody>
      </table>
    </div>
  )
}