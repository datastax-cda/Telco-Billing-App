import React from 'react'
import './home.css';
import Topbar from  '../../components/Topbar/Topbar'
import Sidebar from '../../components/Sidebar/Sidebar';
import HomeBox from '../../components/homebox/Homebox';


export default function Home() {
    return(
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <HomeBox />
      </div>
    </div>
    )
  }
