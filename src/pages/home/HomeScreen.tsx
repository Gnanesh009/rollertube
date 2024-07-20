import React, { Component } from 'react'
// import BottomMenu from '../../components/bottommenu/bottomMenu'
import { BottomNavigation,BottomNavigationAction } from '@mui/material'
import { CContainer } from '@coreui/react'
import styles from './HomeScreen.module.css'
import BottomMenu from '../../components/BottomMenu/bottomNav'
import { SideDrawer,TopNavigation } from '../../components'



const HomeScreen=()=>{
return(  
    <CContainer fluid className={styles.containerMain}>
      <div style={{display:'flex',flexDirection:'row',    margin: '10px'}}>
      <SideDrawer />
      <TopNavigation />
      </div>
      <div style={{bottom:10,position:'absolute',display:'flex',justifyContent:'center',height:'15vh'}} className={styles.bottomNav}>
      <BottomMenu styles={{width:'90vw',borderRadius:20,justifyContent:'space-between',bottom: '22px',display: 'flex',position: 'absolute',borderWidth:1,borderColor:'gray'}} />
      </div>   
    </CContainer>
)
}

export default HomeScreen