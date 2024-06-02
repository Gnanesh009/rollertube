import React, { Component } from 'react'
import { BottomNavigation,BottomNavigationAction } from '@mui/material'

const BottomMenu=()=>{

    return(
        <BottomNavigation
  showLabels
  value={0}
  onChange={(event, newValue) => {
    // setValue(newValue);
  }}
>
  <BottomNavigationAction label="Recents"  />
  <BottomNavigationAction label="Favorites" />
  <BottomNavigationAction label="Nearby"  />
</BottomNavigation>
    )

}

export default BottomMenu;