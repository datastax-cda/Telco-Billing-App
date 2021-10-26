import React from 'react'
import './shop.css';
import Topbar from  '../../components/Topbar/Topbar'
import Sidebar from '../../components/Sidebar/Sidebar';
import Shopbox from '../../components/Shopbox/Shopbox';

export default function Shop() {
    return(
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Shopbox />
      </div>
    </div>
    )
}