import React, { Component } from 'react'
import { Box } from '@mui/material';
import { Logo } from '../../icons';
import styles from './topbar.module.css'

const TopNavigation=()=>{
    return(
    <Box sx={{display:'flex',width:'100vw',height:'8vh'}}>
            <div style={{height:'100%',width:'100%',flexDirection:'row',display:'flex',justifyContent:'space-around'}}>
                    <div style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                        <img src={Logo} className={styles.imgLogo}/>
                    </div>

                    <div  className={styles.searchDivMain}>
                    <p>
                        Search
                    </p>
                    <img src={Logo} className={styles.imgLogo}/>
                       
                    </div>

                    <div  className={styles.searchDivMain}>
                    <p>
                        Search
                    </p>
                    <img src={Logo} className={styles.imgLogo}/>
                       
                    </div>


            </div>
    </Box>)
}

export default TopNavigation