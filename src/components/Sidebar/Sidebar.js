import React from 'react'
import "./Sidebar.css";
import {
  Home,
  Timeline,
  PermIdentity,
  Storefront,
  AttachMoney,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  AllInclusive,
  PhoneCallback,
  EmojiPeople,
  HeadsetMic,
  AccountBalanceRounded,
  LocationOn
} from "@material-ui/icons";
import { useHistory } from 'react-router-dom'


export default function Sidebar() {
  let history = useHistory()
  const account = window.location.search

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li onClick={ () => { history.push(`/home${account}`)}} className="sidebarListItem">
              <Home className="sidebarIcon"/>
              Home
            </li>
            <li onClick={ () => { history.push(`/usage${account}`)}} className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Usage Analysis
            </li>
            <li onClick={ () => { history.push(`/bill${account}`)}} className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Bill
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                MyAccount
              </li>
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Shop
              </li>
            <li className="sidebarListItem">
              <AllInclusive className="sidebarIcon" />
              MyRewards
            </li>
            <li className="sidebarListItem">
              <AccountBalanceRounded className="sidebarIcon" />
              Payment
            </li>
            <li onClick={ () => { history.push(`/map`)}} className="sidebarListItem">
              <LocationOn className="sidebarIcon" />
              Locate Phone
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Contact Us</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Chat with us
            </li>
            <li className="sidebarListItem">
              <HeadsetMic className="sidebarIcon" />
              Call us
            </li>
            <li className="sidebarListItem">
              <PhoneCallback className="sidebarIcon" />
              Schedule a call
            </li>
            <li className="sidebarListItem">
              <EmojiPeople className="sidebarIcon" />
              Shop with us
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">MyGalaxyApp</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage App
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              App Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
