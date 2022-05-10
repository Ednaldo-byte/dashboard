import HeaderMarketplace from "./header";
import TableMarketplace from "./table";

export default function CardMarketplaceList(){
  return(
    <div className="bg-white radius h-100 w-100 p-4 bg-white">
      <HeaderMarketplace/>
      <TableMarketplace/>
    </div>
  )
}