import { ReactNode } from "react"

interface children{
  children: ReactNode,
  title?: string
}

export function Container({children, title}: children){
  return(
    <div className=" col w-100 d-flex flex-column flex-wrap">
      <span>{title}</span>
      {children}
    </div>
  )
}

export function ContainerFilters({children}: children){
  return(
    <div className="w-100 h-50 m-0 d-flex rounded p-0 mt-2 text-white text-center overflow-hidden">
      {children}
    </div>
  )
}
