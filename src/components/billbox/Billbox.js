import "./billbox.css"
import FeaturedInfoHome from "../featuredInfoHome/FeaturedInfoHome";
import BillingCharts from "../../charts/BillingCharts";
import BillingAccountInfo from "../myaccountInfo/BillingAccountInfo";


export default function Billbox() {
  return (
    <div>
      <div className="home">
        <FeaturedInfoHome />
        <BillingAccountInfo />
        <BillingCharts />
      </div>
    </div>
  )
}
