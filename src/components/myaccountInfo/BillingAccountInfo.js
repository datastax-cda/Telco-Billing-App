import "./myaccountInfo.css"
import DeviceBox from "./components/DeviceBox"
import Subscription from "./components/Subscription"

const BillingAccountInfo = () => {
  
  return (
    <div className="featuredAccount">
      <DeviceBox />
      <Subscription />
    </div>
  )
}

export default BillingAccountInfo