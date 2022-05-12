import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Container, ContainerFilters } from "./containers";

export function Period(){
  return(
    <Container title="Period">

        <ContainerFilters>
          <form className="w-100 form-check w-100 h-100 p-0 d-flex">

              <input className="btn-check form-check-input d-none" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked/>
              <label className="btn-primary w-100 p-2 text-truncate d-flex justify-content-center align-items-center cursor-pointer" htmlFor="flexRadioDefault1">
                <span>Hour</span>
              </label>

              <input className="btn-check form-check-input d-none" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
              <label className="btn-primary w-100 p-2 text-truncate d-flex justify-content-center align-items-center cursor-pointer" htmlFor="flexRadioDefault2">
                <span>Day</span>
              </label>

              <input className="btn-check form-check-input d-none" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
              <label className="btn-primary w-100 p-2 text-truncate d-flex justify-content-center align-items-center
              cursor-pointer" htmlFor="flexRadioDefault3">
                <span>Week</span>
              </label>

          </form>
        </ContainerFilters>

      </Container>

  )
}

export function Date(){

  return(
    <Container title="Date">

      <ContainerFilters>
        <input type='date' className="btn-primary w-100 p-2 text-center d-flex justify-content-center align-items-center cursor-pointer border-0"
        defaultValue='2022-01-06'/>
      </ContainerFilters>

    </Container>
  )
}

export function Payment(){
  return(
    <Container title="Form of payment">

      <ContainerFilters>
        <form className="w-100 form-check w-100 h-100 p-0 d-flex">

          <input className="btn-check form-check-input d-none" type="radio" name="flexRadioDefault" id="flexRadioDefault4" defaultChecked/>
          <label className="btn-primary w-100 p-2 text-truncate d-flex justify-content-center align-items-center
          cursor-pointer" htmlFor="flexRadioDefault4">
            <span>Spot Price</span>
          </label>

          <input className="btn-check form-check-input d-none" type="radio" name="flexRadioDefault" id="flexRadioDefault5"/>
          <label className="btn-primary w-100 p-2  d-flex justify-content-center align-items-center cursor-pointer" 
          htmlFor="flexRadioDefault5">
            <span className="text-truncate text-nowrap">Installment Price</span>
          </label>

        </form>
      </ContainerFilters>

    </Container>
  )
}

export function AllMarketplaces(){

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <Container title="Marketplaces">

      <ContainerFilters>
      <Button variant="primary" onClick={handleShow} className='w-100 text-nowrap text-truncate d-flex justify-content-center align-items-center cursor-pointer'>
        <span>All Marketplaces</span>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
      </ContainerFilters>

    </Container>
  )
}