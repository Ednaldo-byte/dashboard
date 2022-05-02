import { Children, ReactNode } from "react"

interface children{
  children: ReactNode,
  title?: string
}

export function Container({children, title}: children){
  return(
    <div className="container col h-100 w-100">
      <span>{title}</span>
      {children}
    </div>
  )
}

export function ContainerFilters({children}: children){
  return(
    <div className="container w-100 h-50 m-0 d-flex rounded p-0 mt-2 text-white text-center overflow-hidden">
      {children}
    </div>
  )
}
