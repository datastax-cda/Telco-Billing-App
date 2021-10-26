import { useState,useEffect } from "react"
import Card from './Card'
import './shopinfo.css'

import React from 'react'

export default function ShopInfoHome() {

const [shopdetail,setshopdetail] = useState([])
 
const fetchShopDetail = async () => {
const results = await fetch(`/.netlify/functions/getShop`)
const responsebody = await results.json()
setshopdetail(responsebody.data.shop_smartphones.values)
}

useEffect(() => {
fetchShopDetail()
}, [])

return (
<div>
  <h4 className="InfoBox">  Get the Latest and Greatest Line up of phones this holiday Season !! (GraphQL API)</h4>
  <div>
  {shopdetail.map((brand,index) => (<Card key={index} brand={brand} />))}
  </div>
  </div>
)
}
