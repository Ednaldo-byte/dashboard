import HeaderMarketplace from "./header";
import TableMarketplace from "./table";

export default function CardMarketplaceList(){
  return(
    <div className="card h-100 w-100 p-3 bg-white">
      <HeaderMarketplace/>
      <TableMarketplace/>
    </div>
  )
}