import React, { Component } from 'react'
// import BottomMenu from '../../components/bottommenu/bottomMenu'
import { BottomNavigation,BottomNavigationAction } from '@mui/material'
import { CContainer } from '@coreui/react'

const HomeScreen=()=>{


return(  
    <CContainer style={{backgroundColor:'green',width:'100%',height:'100%'}}>

<BottomNavigation

sx={{ width: '100%' ,bottom:20,position:'absolute',}} 
showLabels
value={0}
style={{backgroundColor:'red'}}
onChange={(event, newValue) => {
  // setValue(newValue);
}}
>
<BottomNavigationAction label="Recents"  />
<BottomNavigationAction label="Favorites" />
<BottomNavigationAction label="Nearby"  />
</BottomNavigation>
        
    </CContainer>
)
}

export default HomeScreen