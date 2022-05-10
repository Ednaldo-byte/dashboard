import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header';
import SideBar from '../components/sideBar';
import CardProduct from '../components/cards/product';
import CardMarketplaceList from '../components/cards/marketplace_list';
import CardFilter from '../components/cards/filters';
import ChartArea from '../components/cards/charts/chartArea';
import { useContext } from 'react';
import { AuthContext } from '../context/auth';

const Home: NextPage = () => {

  const { isActive } = useContext(AuthContext)

  return (
    <>
      <Head>
        <title>Dashboard - Tracking Trade</title>
      </Head>

      <main>
        <div className='w-100 h-100 bg-light m-0 dashboard'>
          <div className="row gx-0 layout">
            <div className="p-0 position-relative sidebar-collapsed transition-1"
            style={{width: isActive ? '18rem' : '5rem'}}>
              <SideBar/>
            </div>
            <div className='col p-0 d-grid'>
              <div className='gx-0 header'>
                <Header/>
              </div>
              <div className='w-100 p-3 gap-3 d-flex' id='content'>

                <div className="d-flex flex-column gap-3 productMarketArea">
                  <CardProduct/>
                  <CardMarketplaceList/>
                </div>

                <div className="gap-3 d-flex flex-column chartArea">
                  <div className="filter">
                    <CardFilter/>
                  </div>
                  <div className="h-100 p-0 gap-3 d-flex columnCard">
                    <div className="columnChart">
                      <ChartArea/>
                    </div>
                    <div className="columnChart">
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

