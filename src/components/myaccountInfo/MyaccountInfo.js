import "./myaccountInfo.css"
import AccountInfoBox from "./components/AccountInfoBox"
import DeviceBox from "./components/DeviceBox"
import Subscription from "./components/Subscription"

const MyaccountInfo = () => {
  
  return (
    <div className="featuredAccount">
      <AccountInfoBox />
      <DeviceBox />
      <Subscription />
    </div>
  )
}

export default MyaccountInfo