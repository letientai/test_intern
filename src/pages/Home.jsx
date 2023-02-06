import React from 'react'
import { ContentHome } from '../components/contentHome'
import { Footer } from '../components/footer'
import { SideBar } from '../components/sideBar'
import "./Home.scss"
export const Home = () => {
  return (
    <div className='container'>
        <div className="sideBar">
            <SideBar/>
        </div>
        <div className="contentt">
            <ContentHome/>
            <Footer/>
        </div>
    </div>
  )
}
