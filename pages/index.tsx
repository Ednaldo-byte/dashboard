import type { NextPage } from 'next'
import Header from '../components/header';
import SideBar from '../components/sideBar';
import CardProduct from '../components/cards/product';
import CardMarketplaceList from '../components/cards/marketplace_list';
import CardFilter from '../components/cards/filters';
import ChartArea from '../components/cards/charts/chartArea';

import 'bootstrap/dist/js/bootstrap.min.js'

const Home: NextPage = () => {
  return (
    <>
      <head>
        <title>Dashboard - Tracking Trade</title>
      </head>

      <main>

        <div className='bg-light w-100 vh-100 m-0 gy-0'>
          <div className="row gx-0">
            <div className='col-lg-1 p-0 w-5 position-relative'>
                <SideBar/>
            </div>
            <div className='bg-light col w-95 h-100 p-0 d-grid'>
              <div className='row gx-0 h-100'><Header/></div>
              <div className='row gx-0 w-10 h-100 p-3 gap-3'>

                <div className="col-lg-4 h-100 d-grid gap-3">
                  <CardProduct/>
                  <CardMarketplaceList/>
                </div>

                <div className="col gap-3 h-100">
                  <div className="row gx-0 h-10">
                    <CardFilter/>
                  </div>
                  <div className="row gx-0 h-90 pt-3 gap-3 ">
                    <div className="col">
                      <ChartArea/>
                    </div>
                    <div className="col">
                      <ChartArea/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home

