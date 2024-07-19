import React, { Component } from 'react'
// import { BottomNavigation,BottomNavigationAction } from '@mui/material'
import { BottomNavigation,BottomNavigationAction } from '@mui/material'
import { CContainer } from '@coreui/react'
import stylesMdouel from './bottomNav.module.css'
import { Home } from '@mui/icons-material'
import NavigationIcon from '@mui/icons-material/Navigation';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import VideocamIcon from '@mui/icons-material/Videocam';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
interface BottomMenuProps {
  styles?: React.CSSProperties;
}

const BottomMenu:React.FC<BottomMenuProps>=({styles})=>{

    return(
      <div className={stylesMdouel.bottomNavDivMain}>
  <BottomNavigation
  showLabels
  value={0}
  style={styles}
    className={stylesMdouel.bottomNav}
  onChange={(event, newValue) => {
    // setValue(newValue);
  }}
>
  <BottomNavigationAction label=""  icon={<Home />}/>
  <BottomNavigationAction label="" icon={<NavigationIcon />} />
  <BottomNavigationAction label=""  icon={<FolderCopyIcon />}/>
  <BottomNavigationAction label=""  icon={<VideocamIcon />}/>
  <BottomNavigationAction label=""  icon={<AccountCircleIcon />}/>
  
  
</BottomNavigation>
      </div>
      
    )

}

export default BottomMenu;