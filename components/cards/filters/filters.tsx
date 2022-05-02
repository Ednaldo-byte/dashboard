import { Container, ContainerFilters } from "./containers";

export function Period(){
  return(
    <Container title="Period">

        <ContainerFilters>
          <form className="w-100 d-flex" id="form1">
            <input type="radio" className="btn-check" name="options" id="option1" form="form1" autoComplete="off" checked/>
            <label className="btn-primary w-100 py-2" htmlFor="option1">Day</label>

            <input type="radio" className="btn-check" name="options" id="option2" form="form1" autoComplete="off"/>
            <label className="btn-primary w-100 py-2" htmlFor="option2">Hour</label>
            
            <input type="radio" className="btn-check" name="options" id="option3" form="form1" autoComplete="off"/>
            <label className="btn-primary w-100 py-2" htmlFor="option3">Week</label>
          </form>
        </ContainerFilters>

      </Container>

  )
}

export function Date(){
  return(
    <Container title="Date">

      <ContainerFilters>
        <input type="date" className="btn-primary w-100 border-0 text-center"/>
      </ContainerFilters>

    </Container>
  )
}

export function Payment(){
  return(
    <Container title="Form of payment">

      <ContainerFilters>
        <form className="w-100 d-flex">
          <input type="radio" className="btn-check" name="options" id="option4" autoComplete="off" checked/>
          <label className="btn-primary w-100 py-2" htmlFor="option4">Checked</label>

          <input type="radio" className="btn-check" name="options" id="option5" autoComplete="off"/>
          <label className="btn-primary w-100 py-2" htmlFor="option5">Checked</label>
        </form>
      </ContainerFilters>

    </Container>
  )
}

export function AllMarketplaces(){
  return(
    <Container title="MArketplaces">

      <ContainerFilters>
        <button type="button" className="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          All Marketplaces
        </button>

        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Understood</button>
              </div>
            </div>
          </div>
        </div>
      </ContainerFilters>

    </Container>
  )
}