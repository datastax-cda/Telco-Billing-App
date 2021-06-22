import React from 'react'
import './usage.css';
import Topbar from  '../../components/Topbar/Topbar'
import Sidebar from '../../components/Sidebar/Sidebar';
import UsageBox from '../../components/UsageBox/UsageBox';

export default function Usage() {
    return(
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <UsageBox />
      </div>
    </div>
    )
  }
