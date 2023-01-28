import React, { useState } from 'react'
import './Sidebar.css'
import axios from "axios";
import CIcon from '@coreui/icons-react'
import { cibTwitter } from '@coreui/icons'
import { cilHome } from '@coreui/icons'
import { cilCode } from '@coreui/icons'
import { cilSchool } from '@coreui/icons'
import { cilFire } from '@coreui/icons'

import SidebarOption from './SidebarOption'

function Sidebar() {

  return (
    <div className="sidebar">
        <div className="twitter_icon"><CIcon icon={cibTwitter} size="sm"/></div>
        <SidebarOption active Icon={cilHome} text="Home"/>
        <SidebarOption Icon={cilCode} text="About project"/>
        <SidebarOption Icon={cilSchool} text="About developer"/>
        <SidebarOption Icon={cilFire} text="Future plan"/>

      {/* Button */}
      {/* option */}
      {/* option */}
      {/* option */}
      {/* option */}
    </div>
  )
}

export default Sidebar
